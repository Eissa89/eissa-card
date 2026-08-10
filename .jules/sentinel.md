# Sentinel's Journal - Critical Learnings Only

## 2026-08-09 - Client-side hardening of Single-Page static site
**Vulnerability:** Static single-page portfolios with complex interactivity are highly vulnerable to Client-Side Denial of Service (via large form payload inputs that crash browsers or result in excessively long URLs), hanging connections from unbound API calls, and DOM-based XSS through the usage of `innerHTML` or script execution within inline handlers.
**Learning:** Hardening a purely client-side static application requires implementing defense-in-depth:
1. Strict Content Security Policy (CSP) headers or meta tags, particularly avoiding `'unsafe-inline'` for script tags by separating logic into static JavaScript files.
2. Replacing dynamic `innerHTML` rendering with programmatic DOM construction APIs (`createElement`, `textContent`, `append`) to guarantee that data/translations are treated strictly as text and never compiled as executable code.
3. Client-side input length limits (`maxlength`) and explicit network request abort controllers (timeouts) to bound resources used per user action.
**Prevention:** Always restrict client-side scripts to external files, enforce strict CSP meta tags or HTTP headers, sanitize/constrain any dynamic user inputs and API payloads, and build dynamic UI elements using safe native DOM constructors instead of parsing HTML strings.
