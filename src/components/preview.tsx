import { useRef, useEffect } from "react";

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try{
              eval(event.data);
            } catch(err){
              const root=document.querySelector('#root');
              root.innerHTML = '<div style="color:red;"><h4>Runtime Error</h4>' + err + '</div>';
              console.error(err);
            }
          },false)
        </script>
      </body>
    </html>
  `

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();
  useEffect(() => {
    const iframeCurrent = iframe.current;
    if (!iframeCurrent) return;
    iframeCurrent.srcdoc = html;
    const onLoad = () => {
      iframeCurrent.contentWindow?.postMessage(code, '*');
    };
    iframeCurrent.addEventListener('load', onLoad, { once: true });
    return () => {
      iframeCurrent.removeEventListener('load', onLoad);
    };
  }, [code]);
  return (<iframe
    title="preview"
    ref={iframe}
    sandbox="allow-scripts"
    srcDoc={html}
  />)
}

export default Preview;