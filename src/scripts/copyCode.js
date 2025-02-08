document.addEventListener("DOMContentLoaded", () => {
  let copyButtonLabel = "Copy Code";
  let codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((codeBlock) => {
    let wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    let copyButton = document.createElement("button");
    copyButton.className = "copy-code";
    copyButton.innerHTML = copyButtonLabel;

    codeBlock.setAttribute("tabindex", "0");
    codeBlock.appendChild(copyButton);
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);

    copyButton.addEventListener("click", async () => {
      await copyCode(codeBlock, copyButton);
    });
  });

  async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    button.innerText = "Code Copied";
    setTimeout(() => {
      button.innerText = copyButtonLabel;
    }, 700);
  }
});

