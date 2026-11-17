// =========================================================
// HelloCode - Live C Compiler Playground & AST Offline Simulator
// Module loaded after js/curriculum-data.js and before js/app.js
// =========================================================
const PISTON_EXECUTE_URL = "https://emkc.org/api/v2/piston/execute";
let activePlaygroundKey = "1_0";

function getPlaygroundPreset(key) {
  if (typeof playgroundStarterCode === 'object' && playgroundStarterCode[key]) {
    return playgroundStarterCode[key];
  }
  return {
    code: `#include <stdio.h>\n\nint main(void) {\n    printf("Hello, HelloCode!\\n");\n    return 0;\n}`,
    stdin: ""
  };
}

function getLiveCPlaygroundHtml(topicKey) {
  const preset = getPlaygroundPreset(topicKey);
  return `
    <div class="c-playground-card animate-fade" id="cPlaygroundBox">
      <div class="c-playground-header">
        <div class="c-playground-title">
          <span class="svg-ico" style="color:#38BDF8;">${getSymbolIcon('terminal', 18)}</span>
          <span>ทดลองเขียนและรันโค้ดภาษา C จริง (Live C Playground)</span>
        </div>
        <span class="c-status-pill" id="cPlaygroundStatusPill">GCC / Piston API Ready</span>
      </div>

      <textarea id="cPlaygroundEditor" class="c-editor-textarea" spellcheck="false" aria-label="C Source Code Editor">${escapeHTML(preset.code)}</textarea>

      <div class="c-playground-toolbar">
        <span style="font-size:0.74rem; color:#94A3B8;">กดปุ่ม Tab ในกล่องโค้ดเพื่อย่อหน้า 4 ช่อง · รองรับ Standard Input (scanf)</span>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="btn btn-outline" style="min-height:36px; padding:5px 12px; font-size:0.8rem; background:#1E293B; color:#E2E8F0; border-color:#475569;" onclick="downloadCPlaygroundCode()">
            ${getSymbolIcon('download', 14)} บันทึกไฟล์ .c
          </button>
          <button type="button" class="btn btn-outline" style="min-height:36px; padding:5px 12px; font-size:0.8rem; background:#1E293B; color:#E2E8F0; border-color:#475569;" onclick="resetCPlaygroundCode()">
            ${getSymbolIcon('refreshCw', 14)} รีเซ็ตโค้ดเริ่มต้น
          </button>
          <button type="button" class="btn btn-success" id="btnRunCPlayground" style="min-height:36px; padding:5px 16px; font-size:0.84rem;" onclick="runLiveCPlayground()">
            ${getSymbolIcon('play', 14)} คอมไพล์ &amp; รันโค้ด (Run C)
          </button>
        </div>
      </div>

      <div class="c-playground-io-grid">
        <div>
          <label for="cPlaygroundStdin" style="display:block; font-size:0.75rem; font-weight:700; color:#94A3B8; margin-bottom:4px;">Input (stdin สำหรับ scanf):</label>
          <textarea id="cPlaygroundStdin" class="c-stdin-input" placeholder="กรอกค่าจำลองที่ผู้ใช้ป้อน เช่น 65 หรือ 12 10">${escapeHTML(preset.stdin || "")}</textarea>
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:700; color:#94A3B8; margin-bottom:4px;">Output Console:</label>
          <div id="cPlaygroundOutput" class="c-output-console">กด "คอมไพล์ & รันโค้ด (Run C)" เพื่อดูผลลัพธ์การทำงานจริง...</div>
          <div id="cPlaygroundErrorTip" class="c-output-error-tip hidden"></div>
        </div>
      </div>
    </div>
  `;
}

function initLiveCPlayground(topicKey) {
  activePlaygroundKey = topicKey;
  const editor = document.getElementById("cPlaygroundEditor");
  if (!editor) return;

  editor.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const val = this.value;
      this.value = val.substring(0, start) + "    " + val.substring(end);
      this.selectionStart = this.selectionEnd = start + 4;
    }
  });
}

function resetCPlaygroundCode() {
  const preset = getPlaygroundPreset(activePlaygroundKey);
  const editor = document.getElementById("cPlaygroundEditor");
  const stdinEl = document.getElementById("cPlaygroundStdin");
  const outEl = document.getElementById("cPlaygroundOutput");
  const tipEl = document.getElementById("cPlaygroundErrorTip");
  const pillEl = document.getElementById("cPlaygroundStatusPill");

  if (editor) editor.value = preset.code;
  if (stdinEl) stdinEl.value = preset.stdin || "";
  if (outEl) {
    outEl.classList.remove("is-error");
    outEl.textContent = "รีเซ็ตโค้ดเริ่มต้นเรียบร้อย — กด Run C เพื่อทดสอบได้เลย";
  }
  if (tipEl) {
    tipEl.classList.add("hidden");
    tipEl.innerHTML = "";
  }
  if (pillEl) pillEl.innerText = "GCC / Piston API Ready";
  playSfx('pop');
}

function downloadCPlaygroundCode() {
  try {
    const editor = document.getElementById("cPlaygroundEditor");
    const sourceCode = editor ? editor.value : "";
    if (!sourceCode.trim()) {
      showToast("ยังไม่มีโค้ดภาษา C สำหรับดาวน์โหลด", "warning");
      return;
    }
    const blob = new Blob([sourceCode], { type: "text/x-csrc;charset=utf-8" });
    const safeKey = String(activePlaygroundKey || "main").replace(/[^a-zA-Z0-9_-]/g, "_");
    triggerBlobDownload(blob, `hellocode_${safeKey}.c`);
    playSfx('pop');
    showToast(`ดาวน์โหลดไฟล์ hellocode_${safeKey}.c เรียบร้อยแล้ว`, "success");
  } catch (err) {
    showToast("ไม่สามารถดาวน์โหลดไฟล์โค้ดได้: " + (err.message || err), "error");
  }
}

function explainCCompilerErrorThai(stderrText) {
  const raw = String(stderrText || "");
  const lower = raw.toLowerCase();
  const tips = [];

  if (lower.includes("expected ';'") || lower.includes("expected ';' before")) {
    tips.push("• ลืมใส่เครื่องหมายเซมิโคลอน (;) ท้ายคำสั่งก่อนหน้าบรรทัดที่แจ้งเตือน");
  }
  if (lower.includes("expected '}'") || lower.includes("expected ')'")) {
    tips.push("• เปิดวงเล็บปีกกา { ... } หรือวงเล็บ ( ... ) ไม่ครบคู่ ลองตรวจนับวงเล็บเปิด-ปิด");
  }
  if (lower.includes("undeclared") || lower.includes("not declared")) {
    tips.push("• มีชื่อตัวแปรที่ยังไม่ได้ประกาศชนิดข้อมูล (เช่น int, float, char) หรือพิมพ์ตัวพิมพ์เล็ก-ใหญ่ไม่ตรงกัน (Case-Sensitive)");
  }
  if (lower.includes("implicit declaration of function") || lower.includes("stdio.h")) {
    tips.push("• อาจลืม #include <stdio.h> (สำหรับ printf/scanf) หรือ #include <string.h> (สำหรับ strlen/strcpy)");
  }
  if ((lower.includes("format") && lower.includes("expects argument of type")) || /scanf[\s\S]*expects\s+type/i.test(raw)) {
    tips.push("• ชนิดข้อมูลใน printf/scanf ไม่ตรงกับรหัสจัดรูปแบบ (เช่น %d ใช้กับ int, %f ใช้กับ float) และอย่าลืมใส่ & หน้าตัวแปรใน scanf()");
  }
  if (lower.includes("undefined reference to") && lower.includes("main")) {
    tips.push("• ไม่พบฟังก์ชันหลัก int main(void) { ... } ที่เป็นจุดเริ่มต้นของโปรแกรมภาษา C");
  }

  if (tips.length === 0) {
    tips.push("• ตรวจสอบเครื่องหมาย ; ท้ายคำสั่ง, ปีกกา { } ที่ครอบบล็อกคำสั่ง, และฟันหนู \" \" ให้ครบคู่");
  }
  return `<b>คำแนะนำจุดแก้ไขเบื้องต้น:</b><br>${tips.join("<br>")}`;
}

function runOfflineCSimulator(sourceCode, stdinRaw) {
  const code = String(sourceCode || "");
  const openBraces = (code.match(/\{/g) || []).length;
  const closeBraces = (code.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    return {
      ok: false,
      stderr: `error: unbalanced braces '{' (${openBraces}) vs '}' (${closeBraces})`,
      stdout: ""
    };
  }
  if (!/\bmain\s*\(/.test(code)) {
    return {
      ok: false,
      stderr: "undefined reference to 'main': missing int main() function",
      stdout: ""
    };
  }
  if (/\b(printf|scanf)\s*\(/.test(code) && !/#include\s*<\s*stdio\.h\s*>/.test(code)) {
    return {
      ok: false,
      stderr: "warning/error: implicit declaration of function 'printf'/'scanf' (missing #include <stdio.h>)",
      stdout: ""
    };
  }

  // Strip comments safely without corrupting string/char literals containing // or /*
  const stripComments = (src) => {
    let res = "";
    let inStr = false;
    let inChar = false;
    let inLine = false;
    let inBlock = false;
    for (let i = 0; i < src.length; i++) {
      const ch = src[i];
      const nx = src[i + 1] || "";
      if (inLine) {
        if (ch === "\n") { inLine = false; res += "\n"; }
        continue;
      }
      if (inBlock) {
        if (ch === "*" && nx === "/") { inBlock = false; i++; }
        else if (ch === "\n") res += "\n";
        continue;
      }
      if (inStr) {
        res += ch;
        if (ch === "\\" && i + 1 < src.length) { res += src[++i]; continue; }
        if (ch === '"') inStr = false;
        continue;
      }
      if (inChar) {
        res += ch;
        if (ch === "\\" && i + 1 < src.length) { res += src[++i]; continue; }
        if (ch === "'") inChar = false;
        continue;
      }
      if (ch === '"') { inStr = true; res += ch; continue; }
      if (ch === "'") { inChar = true; res += ch; continue; }
      if (ch === "/" && nx === "/") { inLine = true; i++; continue; }
      if (ch === "/" && nx === "*") { inBlock = true; i++; continue; }
      res += ch;
    }
    return res;
  };

  const noComments = stripComments(code);
  const codeLines = noComments.split(/\r?\n/);
  for (let idx = 0; idx < codeLines.length; idx++) {
    const trimmed = codeLines[idx].trim();
    if (!trimmed || trimmed.startsWith("#") || trimmed === "{" || trimmed === "}") continue;
    if (/^(if|else|for|while|do|switch|case|default)\b/.test(trimmed) ||
        /[;{},:]$/.test(trimmed) ||
        /\)\s*$/.test(trimmed)) {
      continue;
    }
    if (/(printf|scanf|return)\s*\(/.test(trimmed) || /^\s*(int|float|double|char)\s+/.test(trimmed)) {
      return {
        ok: false,
        stderr: `line ${idx + 1}: error: expected ';' at end of statement -> ${trimmed}`,
        stdout: ""
      };
    }
  }

  // Tokenize stdin & helper parsers
  const tokens = String(stdinRaw || "").trim() ? String(stdinRaw).trim().split(/\s+/) : [];
  let tokenCursor = 0;
  let output = "";
  let stepCounter = 0;
  const MAX_SIM_STEPS = 5000;

  const tickStep = () => {
    if (++stepCounter > MAX_SIM_STEPS) {
      throw new Error("error: offline simulator exceeded 5000 execution steps (possible infinite loop)");
    }
  };

  const unescapeCString = (s) => String(s || "")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\r/g, "\r")
    .replace(/\\0/g, "\0")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");

  const decodeCharLiteral = (lit) => {
    const inner = lit.slice(1, -1);
    if (inner === "\\n") return 10;
    if (inner === "\\t") return 9;
    if (inner === "\\0") return 0;
    if (inner === "\\\\") return 92;
    if (inner === "\\'") return 39;
    return inner.length ? inner.charCodeAt(0) : 0;
  };

  const findBalanced = (src, startIdx, openCh, closeCh) => {
    let depth = 0;
    let inStr = false;
    let inChar = false;
    for (let i = startIdx; i < src.length; i++) {
      const ch = src[i];
      if (inStr) { if (ch === "\\") i++; else if (ch === '"') inStr = false; continue; }
      if (inChar) { if (ch === "\\") i++; else if (ch === "'") inChar = false; continue; }
      if (ch === '"') { inStr = true; continue; }
      if (ch === "'") { inChar = true; continue; }
      if (ch === openCh) depth++;
      else if (ch === closeCh) {
        depth--;
        if (depth === 0) return i;
      }
    }
    return -1;
  };

  const splitTopLevel = (str, sep = ',') => {
    const parts = [];
    let pDepth = 0, bDepth = 0, sDepth = 0;
    let inStr = false, inChar = false, start = 0;
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (inStr) { if (ch === "\\") i++; else if (ch === '"') inStr = false; continue; }
      if (inChar) { if (ch === "\\") i++; else if (ch === "'") inChar = false; continue; }
      if (ch === '"') { inStr = true; continue; }
      if (ch === "'") { inChar = true; continue; }
      if (ch === '(') pDepth++;
      else if (ch === ')') pDepth--;
      else if (ch === '{') bDepth++;
      else if (ch === '}') bDepth--;
      else if (ch === '[') sDepth++;
      else if (ch === ']') sDepth--;
      else if (ch === sep && pDepth === 0 && bDepth === 0 && sDepth === 0) {
        parts.push(str.slice(start, i).trim());
        start = i + 1;
      }
    }
    const tail = str.slice(start).trim();
    if (tail || parts.length > 0) parts.push(tail);
    return parts;
  };

  const getVarEntry = (name, scopes) => {
    for (let i = scopes.length - 1; i >= 0; i--) {
      if (Object.prototype.hasOwnProperty.call(scopes[i], name)) {
        return { scope: scopes[i], val: scopes[i][name] };
      }
    }
    return null;
  };

  const setVarValue = (name, val, scopes, declareLocal = false) => {
    if (declareLocal) {
      scopes[scopes.length - 1][name] = val;
      return;
    }
    const found = getVarEntry(name, scopes);
    if (found) found.scope[name] = val;
    else scopes[scopes.length - 1][name] = val;
  };

  const resolveStringCalls = (expr, scopes) => {
    let cur = expr;
    let guard = 0;
    const fnRe = /\b(strlen|strcmp)\s*\(/;
    while (fnRe.test(cur) && guard++ < 40) {
      const m = fnRe.exec(cur);
      const openIdx = cur.indexOf("(", m.index);
      const closeIdx = findBalanced(cur, openIdx, "(", ")");
      if (closeIdx < 0) break;
      const args = splitTopLevel(cur.slice(openIdx + 1, closeIdx), ",");
      let replacement = "0";
      if (m[1] === "strlen" && args[0] !== undefined) {
        const val = evalExpr(args[0], scopes);
        replacement = String(String(val ?? "").length);
      } else if (m[1] === "strcmp" && args.length >= 2) {
        const s1 = String(evalExpr(args[0], scopes) ?? "");
        const s2 = String(evalExpr(args[1], scopes) ?? "");
        replacement = String(s1 === s2 ? 0 : (s1 < s2 ? -1 : 1));
      }
      cur = cur.slice(0, m.index) + replacement + cur.slice(closeIdx + 1);
    }
    return cur;
  };

  const substituteTokensOutsideQuotes = (expr, scopes) => {
    let out = "";
    let i = 0;
    while (i < expr.length) {
      const ch = expr[i];
      if (ch === '"') {
        let j = i + 1;
        while (j < expr.length) {
          if (expr[j] === "\\") j += 2;
          else if (expr[j] === '"') { j++; break; }
          else j++;
        }
        out += JSON.stringify(unescapeCString(expr.slice(i + 1, j - 1)));
        i = j;
        continue;
      }
      if (ch === "'") {
        let j = i + 1;
        while (j < expr.length) {
          if (expr[j] === "\\") j += 2;
          else if (expr[j] === "'") { j++; break; }
          else j++;
        }
        out += String(decodeCharLiteral(expr.slice(i, j)));
        i = j;
        continue;
      }
      if (/[0-9]/.test(ch)) {
        const numMatch = expr.slice(i).match(/^(?:\d+(?:\.\d+)?|\.\d+)(?:[fFlLuU]+)?/);
        if (numMatch) {
          out += numMatch[0].replace(/[fFlLuU]+$/g, "");
          i += numMatch[0].length;
          continue;
        }
      }
      if (/[a-zA-Z_]/.test(ch)) {
        const idMatch = expr.slice(i).match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
        const ident = idMatch[0];
        let cursor = i + ident.length;
        // Skip function-like identifiers (should already be resolved) or keywords
        const found = getVarEntry(ident, scopes);
        if (found !== null) {
          let val = found.val;
          // Consume array indices [expr][expr]
          while (cursor < expr.length && expr[cursor] === "[") {
            const closeBracket = findBalanced(expr, cursor, "[", "]");
            if (closeBracket < 0) break;
            const idxVal = parseInt(evalExpr(expr.slice(cursor + 1, closeBracket), scopes), 10) || 0;
            if (typeof val === "string") {
              val = idxVal >= 0 && idxVal < val.length ? val.charCodeAt(idxVal) : 0;
            } else if (Array.isArray(val)) {
              val = (idxVal >= 0 && idxVal < val.length) ? val[idxVal] : 0;
            }
            cursor = closeBracket + 1;
          }
          out += (typeof val === "string") ? JSON.stringify(val) : String(val ?? 0);
          i = cursor;
          continue;
        }
        out += ident;
        i = cursor;
        continue;
      }
      out += ch;
      i++;
    }
    return out;
  };

  const resolveInlineIncrements = (expr, scopes) => {
    let out = "";
    let i = 0;
    const readIndexedSuffix = (str, startIdx) => {
      let c = startIdx;
      for (let d = 0; d < 2 && c < str.length && str[c] === "["; d++) {
        const closeIdx = findBalanced(str, c, "[", "]");
        if (closeIdx < 0) break;
        c = closeIdx + 1;
      }
      return c;
    };

    while (i < expr.length) {
      const ch = expr[i];
      if (ch === '"' || ch === "'") {
        let j = i + 1;
        while (j < expr.length) {
          if (expr[j] === "\\") j += 2;
          else if (expr[j] === ch) { j++; break; }
          else j++;
        }
        out += expr.slice(i, j);
        i = j;
        continue;
      }

      // Prefix ++target or --target (outside string/char literals)
      if ((expr.startsWith("++", i) || expr.startsWith("--", i))) {
        const op = expr.slice(i, i + 2);
        let k = i + 2;
        while (k < expr.length && /\s/.test(expr[k])) k++;
        const idM = expr.slice(k).match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
        if (idM && getVarEntry(idM[0], scopes) !== null) {
          const endTarget = readIndexedSuffix(expr, k + idM[0].length);
          const target = expr.slice(k, endTarget);
          const cur = Number(getTargetValue(target, scopes)) || 0;
          const nextVal = op === "++" ? cur + 1 : cur - 1;
          assignVariableTarget(target, nextVal, scopes);
          out += `(${nextVal})`;
          i = endTarget;
          continue;
        }
      }

      // Postfix target++ or target-- (outside string/char literals)
      if (/[a-zA-Z_]/.test(ch)) {
        const idM = expr.slice(i).match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
        const ident = idM[0];
        const endTarget = readIndexedSuffix(expr, i + ident.length);
        const target = expr.slice(i, endTarget);
        let k = endTarget;
        while (k < expr.length && /\s/.test(expr[k])) k++;
        if ((expr.startsWith("++", k) || expr.startsWith("--", k)) && getVarEntry(ident, scopes) !== null) {
          const op = expr.slice(k, k + 2);
          const cur = Number(getTargetValue(target, scopes)) || 0;
          const nextVal = op === "++" ? cur + 1 : cur - 1;
          assignVariableTarget(target, nextVal, scopes);
          out += `(${cur})`;
          i = k + 2;
          continue;
        }
        out += target;
        i = endTarget;
        continue;
      }

      out += ch;
      i++;
    }
    return out;
  };

  function evalExpr(expr, scopes) {
    const raw = String(expr || "").trim();
    if (!raw) return 0;
    const withStrings = resolveStringCalls(raw, scopes);
    const withIncrements = resolveInlineIncrements(withStrings, scopes);
    const prepared = substituteTokensOutsideQuotes(withIncrements, scopes);
    const outsideQuotes = prepared.replace(/"(?:\\.|[^"\\])*"/g, '""');
    // Reject non-expression tokens outside string literals cleanly
    if (/[;{}]/.test(outsideQuotes)) return 0;
    try {
      const val = Function(`"use strict"; return (${prepared});`)();
      if (typeof val === "boolean") return val ? 1 : 0;
      return val;
    } catch (err) {
      return raw;
    }
  }

  const formatPrintf = (fmtRaw, args) => {
    let argIdx = 0;
    let out = unescapeCString(fmtRaw).replace(/%%/g, "\u0000PCT\u0000");
    out = out.replace(/%(?:\.(\d+))?(?:l|z|h)*(d|i|u|f|lf|c|s)/gi, (match, prec, spec) => {
      const val = args[argIdx++];
      if (val === undefined) return "";
      const s = spec.toLowerCase();
      if (s === "d" || s === "i" || s === "u") return String(parseInt(val, 10) || 0);
      if (s === "f" || s === "lf") {
        const num = Number(val) || 0;
        return prec !== undefined ? num.toFixed(parseInt(prec, 10)) : num.toFixed(6);
      }
      if (s === "c") return typeof val === "number" ? String.fromCharCode(val) : String(val).charAt(0);
      if (s === "s") return String(val);
      return String(val);
    });
    return out.replace(/\u0000PCT\u0000/g, "%");
  };

  const getTargetValue = (targetRaw, scopes) => {
    const lhs = targetRaw.trim();
    const arrM = lhs.match(/^([a-zA-Z_]\w*)(?:\[([^\]]+)\])(?:\[([^\]]+)\])?$/);
    if (arrM) {
      const found = getVarEntry(arrM[1], scopes);
      if (!found) return 0;
      const idx1 = parseInt(evalExpr(arrM[2], scopes), 10) || 0;
      if (arrM[3] !== undefined) {
        const idx2 = parseInt(evalExpr(arrM[3], scopes), 10) || 0;
        if (Array.isArray(found.val) && Array.isArray(found.val[idx1])) {
          return Number(found.val[idx1][idx2]) || 0;
        }
        return 0;
      }
      if (Array.isArray(found.val)) return Number(found.val[idx1]) || 0;
      if (typeof found.val === "string") return found.val.charCodeAt(idx1) || 0;
      return 0;
    }
    const found = getVarEntry(lhs, scopes);
    return found ? (Number(found.val) || 0) : 0;
  };

  const assignVariableTarget = (lhsRaw, newValOrFn, scopes) => {
    const lhs = lhsRaw.trim();
    const arrM = lhs.match(/^([a-zA-Z_]\w*)(?:\[([^\]]+)\])(?:\[([^\]]+)\])?$/);
    if (arrM) {
      const found = getVarEntry(arrM[1], scopes);
      if (!found) return;
      const idx1 = parseInt(evalExpr(arrM[2], scopes), 10) || 0;
      if (arrM[3] !== undefined) {
        const idx2 = parseInt(evalExpr(arrM[3], scopes), 10) || 0;
        if (Array.isArray(found.val) && Array.isArray(found.val[idx1])) {
          const cur = found.val[idx1][idx2] || 0;
          found.val[idx1][idx2] = typeof newValOrFn === "function" ? newValOrFn(cur) : newValOrFn;
        }
      } else if (Array.isArray(found.val)) {
        const cur = found.val[idx1] || 0;
        found.val[idx1] = typeof newValOrFn === "function" ? newValOrFn(cur) : newValOrFn;
      } else if (typeof found.val === "string") {
        const arr = found.val.split("");
        const ch = typeof newValOrFn === "number" ? String.fromCharCode(newValOrFn) : String(newValOrFn).charAt(0);
        arr[idx1] = ch;
        found.scope[arrM[1]] = arr.join("");
      }
      return;
    }
    const found = getVarEntry(lhs, scopes);
    const cur = found ? found.val : 0;
    const nextVal = typeof newValOrFn === "function" ? newValOrFn(cur) : newValOrFn;
    setVarValue(lhs, nextVal, scopes, false);
  };

  // Recursive AST block parser for C subset
  const parseCBlock = (src) => {
    const nodes = [];
    let pos = 0;

    const skipWs = () => {
      while (pos < src.length && /\s/.test(src[pos])) pos++;
    };

    const readNextNode = () => {
      skipWs();
      if (pos >= src.length) return null;

      if (src[pos] === ";") {
        pos++;
        return { type: "noop" };
      }

      if (src[pos] === "{") {
        const end = findBalanced(src, pos, "{", "}");
        if (end < 0) { pos = src.length; return null; }
        const inner = src.slice(pos + 1, end);
        pos = end + 1;
        return { type: "block", body: parseCBlock(inner) };
      }

      const rest = src.slice(pos);
      const matchKw = rest.match(/^(for|while|do|if|switch)\b/);
      if (matchKw) {
        const kw = matchKw[1];
        if (kw === "for" || kw === "while" || kw === "switch") {
          const openP = src.indexOf("(", pos + kw.length);
          if (openP >= 0 && /^\s*$/.test(src.slice(pos + kw.length, openP))) {
            const closeP = findBalanced(src, openP, "(", ")");
            if (closeP >= 0) {
              const header = src.slice(openP + 1, closeP);
              pos = closeP + 1;
              if (kw === "switch") {
                skipWs();
                const openB = src[pos] === "{" ? pos : -1;
                if (openB >= 0) {
                  const closeB = findBalanced(src, openB, "{", "}");
                  const rawBody = src.slice(openB + 1, closeB);
                  pos = closeB + 1;
                  return { type: "switch", expr: header.trim(), rawBody };
                }
              }
              const bodyNode = readNextNode();
              if (kw === "for") {
                const hParts = splitTopLevel(header, ";");
                return {
                  type: "for",
                  init: hParts[0] || "",
                  cond: hParts[1] || "1",
                  step: hParts[2] || "",
                  body: bodyNode
                };
              }
              return { type: "while", cond: header.trim(), body: bodyNode };
            }
          }
        } else if (kw === "do" && /[\s{]/.test(src[pos + 2] || "")) {
          pos += 2;
          const bodyNode = readNextNode();
          skipWs();
          let cond = "0";
          if (src.slice(pos).startsWith("while")) {
            const openP = src.indexOf("(", pos + 5);
            const closeP = openP >= 0 ? findBalanced(src, openP, "(", ")") : -1;
            if (closeP >= 0) {
              cond = src.slice(openP + 1, closeP).trim();
              pos = closeP + 1;
              skipWs();
              if (src[pos] === ";") pos++;
            }
          }
          return { type: "do", body: bodyNode, cond };
        } else if (kw === "if") {
          const openP = src.indexOf("(", pos + 2);
          if (openP >= 0 && /^\s*$/.test(src.slice(pos + 2, openP))) {
            const closeP = findBalanced(src, openP, "(", ")");
            if (closeP >= 0) {
              const cond = src.slice(openP + 1, closeP).trim();
              pos = closeP + 1;
              const thenBody = readNextNode();
              skipWs();
              let elseBody = null;
              if (/^else(?=\b|\s|\{)/.test(src.slice(pos))) {
                pos += 4;
                elseBody = readNextNode();
              }
              return { type: "if", cond, thenBody, elseBody };
            }
          }
        }
      }

      // Simple statement ending in ';'
      let inStr = false, inChar = false, bDepth = 0, pDepth = 0;
      const start = pos;
      while (pos < src.length) {
        const ch = src[pos];
        if (inStr) { if (ch === "\\") pos += 2; else { if (ch === '"') inStr = false; pos++; } continue; }
        if (inChar) { if (ch === "\\") pos += 2; else { if (ch === "'") inChar = false; pos++; } continue; }
        if (ch === '"') { inStr = true; pos++; continue; }
        if (ch === "'") { inChar = true; pos++; continue; }
        if (ch === "(") pDepth++;
        else if (ch === ")") pDepth--;
        else if (ch === "{") bDepth++;
        else if (ch === "}") {
          if (bDepth === 0) break;
          bDepth--;
        } else if (ch === ";" && bDepth === 0 && pDepth === 0) {
          const raw = src.slice(start, pos).trim();
          pos++;
          return { type: "stmt", raw };
        }
        pos++;
      }
      const rawTail = src.slice(start, pos).trim();
      return rawTail ? { type: "stmt", raw: rawTail } : null;
    };

    while (pos < src.length) {
      const node = readNextNode();
      if (!node) break;
      if (node.type !== "noop") nodes.push(node);
    }
    return nodes;
  };

  const execSimpleStmt = (rawStmt, scopes, declareInCurrentScope = false) => {
    const s = String(rawStmt || "").trim();
    if (!s) return "normal";
    if (s === "break") return "break";
    if (s === "continue") return "continue";
    if (/^return\b/.test(s)) return "return";

    // Handle multi-expression comma inside for-step like i++, j--
    if (!/^(?:const\s+)?(?:int|float|double|char|unsigned|long|short|printf|scanf|strcat|strcpy)\b/.test(s) && s.includes(",")) {
      const subExprs = splitTopLevel(s, ",");
      if (subExprs.length > 1) {
        for (const sub of subExprs) {
          const sig = execSimpleStmt(sub, scopes, declareInCurrentScope);
          if (sig !== "normal") return sig;
        }
        return "normal";
      }
    }

    // Variable & Array Declarations
    const declM = s.match(/^(?:const\s+)?(int|float|double|unsigned|long|short|char)\s+([\s\S]+)$/);
    if (declM) {
      const baseType = declM[1];
      const declarators = splitTopLevel(declM[2], ",");
      declarators.forEach(part => {
        const eqIdx = part.indexOf("=");
        const left = (eqIdx > -1 ? part.slice(0, eqIdx) : part).trim();
        const right = eqIdx > -1 ? part.slice(eqIdx + 1).trim() : "";

        // 2D array: name[rows][cols]
        const arr2M = left.match(/^([a-zA-Z_]\w*)\[\s*([^\]]*)\s*\]\[\s*([^\]]*)\s*\]$/);
        if (arr2M) {
          const rSize = Math.max(1, parseInt(evalExpr(arr2M[2] || "0", scopes), 10) || 2);
          const cSize = Math.max(1, parseInt(evalExpr(arr2M[3] || "0", scopes), 10) || 2);
          const mat = Array.from({ length: rSize }, () => Array(cSize).fill(0));
          if (right.startsWith("{") && right.endsWith("}")) {
            const rowItems = splitTopLevel(right.slice(1, -1), ",");
            rowItems.forEach((rowStr, rIdx) => {
              if (rIdx >= rSize) return;
              const cleanRow = rowStr.trim();
              if (cleanRow.startsWith("{") && cleanRow.endsWith("}")) {
                const cells = splitTopLevel(cleanRow.slice(1, -1), ",");
                cells.forEach((cellExpr, cIdx) => {
                  if (cIdx < cSize) mat[rIdx][cIdx] = Number(evalExpr(cellExpr, scopes)) || 0;
                });
              }
            });
          }
          setVarValue(arr2M[1], mat, scopes, declareInCurrentScope);
          return;
        }

        // 1D array or char[] string: name[size]
        const arr1M = left.match(/^([a-zA-Z_]\w*)\[\s*([^\]]*)\s*\]$/);
        if (arr1M) {
          const varName = arr1M[1];
          if (baseType === "char") {
            const strM = right.match(/^"([\s\S]*)"$/);
            setVarValue(varName, strM ? unescapeCString(strM[1]) : "", scopes, declareInCurrentScope);
          } else {
            const items = (right.startsWith("{") && right.endsWith("}"))
              ? splitTopLevel(right.slice(1, -1), ",").filter(Boolean).map(x => Number(evalExpr(x, scopes)) || 0)
              : [];
            const declLen = arr1M[2] ? (parseInt(evalExpr(arr1M[2], scopes), 10) || items.length) : items.length;
            const arr = Array.from({ length: Math.max(declLen, items.length) }, (_, idx) => (idx < items.length ? items[idx] : 0));
            setVarValue(varName, arr, scopes, declareInCurrentScope);
          }
          return;
        }

        // Scalar variable
        const scalarName = left.trim();
        if (!scalarName) return;
        let initVal = 0;
        if (right) {
          const ev = evalExpr(right, scopes);
          initVal = typeof ev === "number" ? ev : (Number.isNaN(Number(ev)) ? ev : Number(ev));
        }
        setVarValue(scalarName, initVal, scopes, declareInCurrentScope);
      });
      return "normal";
    }

    // <string.h> mutating statements: strcat(dest, src) & strcpy(dest, src)
    const strFnM = s.match(/^(strcat|strcpy)\s*\(([\s\S]*)\)$/);
    if (strFnM) {
      const args = splitTopLevel(strFnM[2], ",");
      if (args.length >= 2) {
        const destName = args[0].trim();
        const srcVal = String(evalExpr(args[1], scopes) ?? "");
        if (strFnM[1] === "strcpy") {
          setVarValue(destName, srcVal, scopes, false);
        } else {
          const cur = getVarEntry(destName, scopes);
          setVarValue(destName, String(cur ? cur.val : "") + srcVal, scopes, false);
        }
      }
      return "normal";
    }

    // scanf(...)
    const scanfM = s.match(/^scanf\s*\(\s*"([^"]*)"\s*,\s*([\s\S]+)\)$/);
    if (scanfM) {
      const fmt = scanfM[1];
      const specMatches = [...fmt.matchAll(/%\d*([a-zA-Z]+)/g)].map(x => x[1].toLowerCase());
      const targets = splitTopLevel(scanfM[2], ",").map(v => v.trim().replace(/^&/, ""));
      targets.forEach((target, idx) => {
        const spec = specMatches[idx] || "d";
        const tok = tokenCursor < tokens.length ? tokens[tokenCursor++] : (spec.includes("s") ? "" : "0");
        let parsedVal = tok;
        if (spec.includes("s")) parsedVal = String(tok);
        else if (spec.includes("c")) parsedVal = String(tok).charCodeAt(0) || 0;
        else {
          const num = Number(tok);
          parsedVal = Number.isNaN(num) ? 0 : num;
        }
        assignVariableTarget(target, parsedVal, scopes);
      });
      return "normal";
    }

    // printf(...)
    const printfM = s.match(/^printf\s*\(([\s\S]*)\)$/);
    if (printfM) {
      const args = splitTopLevel(printfM[1], ",");
      if (args.length > 0) {
        const fmtArg = args[0].trim();
        const fmtStrM = fmtArg.match(/^"([\s\S]*)"$/);
        const fmt = fmtStrM ? fmtStrM[1] : String(evalExpr(fmtArg, scopes) ?? "");
        const evalArgs = args.slice(1).map(a => evalExpr(a, scopes));
        output += formatPrintf(fmt, evalArgs);
      }
      return "normal";
    }

    // Pre/post increment or decrement: i++, ++i, i--, --i
    const incM = s.match(/^(?:(\+\+|--)\s*([a-zA-Z_]\w*(?:\[[^\]]+\]){0,2})|([a-zA-Z_]\w*(?:\[[^\]]+\]){0,2})\s*(\+\+|--))$/);
    if (incM) {
      const op = incM[1] || incM[4];
      const target = incM[2] || incM[3];
      const delta = op === "++" ? 1 : -1;
      assignVariableTarget(target, (cur) => (Number(cur) || 0) + delta, scopes);
      return "normal";
    }

    // Compound assignment & standard assignment: += -= *= /= %= =
    const assignM = s.match(/^([a-zA-Z_]\w*(?:\[[^\]]+\]){0,2})\s*(\+=|-=|\*=|\/=|%=|=)\s*([\s\S]+)$/);
    if (assignM) {
      const [, lhs, op, rhs] = assignM;
      const rVal = evalExpr(rhs, scopes);
      if (op === "=") {
        assignVariableTarget(lhs, rVal, scopes);
      } else {
        const nR = Number(rVal) || 0;
        assignVariableTarget(lhs, (cur) => {
          const nL = Number(cur) || 0;
          if (op === "+=") return nL + nR;
          if (op === "-=") return nL - nR;
          if (op === "*=") return nL * nR;
          if (op === "/=") return nR !== 0 ? nL / nR : 0;
          if (op === "%=") return nR !== 0 ? nL % nR : 0;
          return nR;
        }, scopes);
      }
      return "normal";
    }

    return "normal";
  };

  const execSwitch = (exprRaw, rawBody, scopes) => {
    const targetVal = evalExpr(exprRaw, scopes);
    // Split rawBody into labeled sections cleanly at top brace level
    const stmts = parseCBlock(rawBody);
    const flatItems = [];
    const labelMap = [];
    let defaultIdx = -1;

    stmts.forEach(node => {
      if (node.type === "stmt" && /^(case\s+|default\s*:)/.test(node.raw)) {
        // Parse colon chains e.g. "case 1: printf(...)" that readNextNode stopped only at ';'
        let rem = node.raw;
        while (rem) {
          const caseM = rem.match(/^case\s+([^:]+):([\s\S]*)$/);
          const defM = rem.match(/^default\s*:([\s\S]*)$/);
          if (caseM) {
            labelMap.push({ val: evalExpr(caseM[1], scopes), idx: flatItems.length });
            rem = caseM[2].trim();
          } else if (defM) {
            defaultIdx = flatItems.length;
            rem = defM[1].trim();
          } else {
            flatItems.push({ type: "stmt", raw: rem });
            rem = "";
          }
        }
      } else {
        flatItems.push(node);
      }
    });

    const matchEntry = labelMap.find(l => l.val == targetVal);
    const startIdx = matchEntry ? matchEntry.idx : defaultIdx;
    if (startIdx < 0) return "normal";

    for (let i = startIdx; i < flatItems.length; i++) {
      const sig = execNode(flatItems[i], scopes);
      if (sig === "break") return "normal";
      if (sig === "return" || sig === "continue") return sig;
    }
    return "normal";
  };

  const execNodeList = (list, scopes) => {
    for (const node of list) {
      const sig = execNode(node, scopes);
      if (sig !== "normal") return sig;
    }
    return "normal";
  };

  function execNode(node, scopes) {
    if (!node) return "normal";
    tickStep();
    switch (node.type) {
      case "stmt":
        return execSimpleStmt(node.raw, scopes, true);
      case "block": {
        const innerScopes = [...scopes, {}];
        return execNodeList(node.body, innerScopes);
      }
      case "if": {
        const condVal = evalExpr(node.cond, scopes);
        if (condVal) return execNode(node.thenBody, scopes);
        if (node.elseBody) return execNode(node.elseBody, scopes);
        return "normal";
      }
      case "for": {
        const loopScopes = [...scopes, {}];
        if (node.init) execSimpleStmt(node.init, loopScopes, true);
        while (true) {
          tickStep();
          if (node.cond && !evalExpr(node.cond, loopScopes)) break;
          const sig = execNode(node.body, loopScopes);
          if (sig === "break") break;
          if (sig === "return") return "return";
          if (node.step) execSimpleStmt(node.step, loopScopes, false);
        }
        return "normal";
      }
      case "while": {
        while (evalExpr(node.cond, scopes)) {
          tickStep();
          const sig = execNode(node.body, scopes);
          if (sig === "break") break;
          if (sig === "return") return "return";
        }
        return "normal";
      }
      case "do": {
        do {
          tickStep();
          const sig = execNode(node.body, scopes);
          if (sig === "break") break;
          if (sig === "return") return "return";
        } while (evalExpr(node.cond, scopes));
        return "normal";
      }
      case "switch":
        return execSwitch(node.expr, node.rawBody, scopes);
      default:
        return "normal";
    }
  }

  // Locate main() body with balanced braces instead of greedy regex
  let body = noComments;
  const mainHdr = noComments.match(/\bmain\s*\([^)]*\)\s*\{/);
  if (mainHdr) {
    const braceStart = mainHdr.index + mainHdr[0].length - 1;
    const braceEnd = findBalanced(noComments, braceStart, "{", "}");
    if (braceEnd > braceStart) {
      body = noComments.slice(braceStart + 1, braceEnd);
    }
  }

  try {
    const ast = parseCBlock(body);
    execNodeList(ast, [{}]);
    return {
      ok: true,
      stdout: output || "(รันสำเร็จในโหมดจำลองออฟไลน์ — ไม่มีข้อความแสดงผล)",
      stderr: ""
    };
  } catch (err) {
    return {
      ok: false,
      stderr: err.message || String(err),
      stdout: output
    };
  }
}

async function runLiveCPlayground() {
  const editor = document.getElementById("cPlaygroundEditor");
  const stdinEl = document.getElementById("cPlaygroundStdin");
  const outEl = document.getElementById("cPlaygroundOutput");
  const tipEl = document.getElementById("cPlaygroundErrorTip");
  const pillEl = document.getElementById("cPlaygroundStatusPill");
  const btnEl = document.getElementById("btnRunCPlayground");
  if (!editor || !outEl) return;

  const sourceCode = editor.value;
  const stdin = stdinEl ? stdinEl.value : "";
  if (!sourceCode.trim()) {
    showToast("กรุณาเขียนโค้ดภาษา C ก่อนกดรัน", "warning");
    return;
  }

  if (btnEl) {
    btnEl.disabled = true;
    btnEl.innerHTML = `${getSymbolIcon('clock', 14)} กำลังคอมไพล์...`;
  }
  if (pillEl) pillEl.innerText = "กำลังส่งคำสั่งไปยัง Piston GCC...";
  if (tipEl) {
    tipEl.classList.add("hidden");
    tipEl.innerHTML = "";
  }
  outEl.classList.remove("is-error");
  outEl.textContent = "Compiling and executing main.c...";

  try {
    if (!navigator.onLine) throw new Error("OFFLINE_DEVICE");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const response = await fetch(PISTON_EXECUTE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        language: "c",
        version: "*",
        files: [{ name: "main.c", content: sourceCode }],
        stdin
      })
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP_${response.status}`);
    const data = await response.json();

    const compileStage = data.compile || {};
    const runStage = data.run || {};

    if (compileStage.code && compileStage.code !== 0) {
      const errText = compileStage.stderr || compileStage.output || "Compilation failed.";
      outEl.classList.add("is-error");
      outEl.textContent = errText;
      if (pillEl) pillEl.innerText = "Compile Error";
      if (tipEl) {
        tipEl.innerHTML = explainCCompilerErrorThai(errText);
        tipEl.classList.remove("hidden");
      }
      playSfx('error');
      showToast("พบข้อผิดพลาดระหว่างคอมไพล์ — ดูคำแนะนำด้านล่าง Output", "warning");
      return;
    }

    const combinedOut = (runStage.stdout || "") + (runStage.stderr ? `\n[stderr]\n${runStage.stderr}` : "");
    if (runStage.code && runStage.code !== 0) {
      outEl.classList.add("is-error");
      outEl.textContent = combinedOut || `Program exited with code ${runStage.code}`;
      if (pillEl) pillEl.innerText = `Runtime Exit ${runStage.code}`;
      playSfx('error');
    } else {
      outEl.classList.remove("is-error");
      outEl.textContent = combinedOut || "(Program finished with exit code 0 and empty output)";
      if (pillEl) pillEl.innerText = "Compiled & Executed (GCC Online)";
      playSfx('success');
      showToast("รันโค้ดภาษา C สำเร็จ!", "success");
    }
  } catch (err) {
    // Graceful Offline Fallback Simulator
    const sim = runOfflineCSimulator(sourceCode, stdin);
    if (pillEl) pillEl.innerText = "โหมดจำลองออฟไลน์ (Offline Simulator)";
    if (!sim.ok) {
      outEl.classList.add("is-error");
      outEl.textContent = sim.stderr;
      if (tipEl) {
        tipEl.innerHTML = explainCCompilerErrorThai(sim.stderr);
        tipEl.classList.remove("hidden");
      }
      playSfx('error');
      showToast("ไม่สามารถเชื่อมต่อคอมไพเลอร์ออนไลน์ — ตรวจพบข้อผิดพลาดในโหมดจำลอง", "warning");
    } else {
      outEl.classList.remove("is-error");
      outEl.textContent = sim.stdout;
      playSfx('pop');
      showToast("ทำงานในโหมดจำลองออฟไลน์ (ไม่มีอินเทอร์เน็ตหรือเซิร์ฟเวอร์ไม่ตอบสนอง)", "info");
    }
  } finally {
    if (btnEl) {
      btnEl.disabled = false;
      btnEl.innerHTML = `${getSymbolIcon('play', 14)} คอมไพล์ &amp; รันโค้ด (Run C)`;
    }
  }
}
