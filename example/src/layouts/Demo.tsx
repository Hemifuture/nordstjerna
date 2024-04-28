import { NCard, NFooter, NSideNav } from "~/nordstjerna";
import { ParentProps } from "solid-js";

const DemoLayout = (props: ParentProps) => {
  return (
    <>
      <div class="flex hfull">
        <NSideNav>alskgjd</NSideNav>
        <div class="flex-1 flex flex-col overflow-auto">
          <div class="flex-1">{props.children}</div>
          <NFooter>
            <div class="px20 flex justify-between items-center">
              <div class="flex flex-col justify-center items-center">
                <p>Copyright © 2024 | Stjernestøv</p>
                <p>
                  Powered by{" "}
                  <a href="https://baidu.com" class="link">
                    Nordstjerna-Style
                  </a>
                </p>
              </div>
              <div class="flex flex-col justify-center items-center">
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  rel="noreferrer"
                  target="_blank"
                  class="link"
                >
                  某ICP备xxxxxxxx号-x
                </a>
                <a
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=xxxxxxxxxxxxxx"
                  rel="noreferrer"
                  target="_blank"
                  class="flex items-center gap-1 link"
                >
                  <img
                    src="/gaba.png"
                    alt="gaba"
                    class="w-4 h-4 inline-block"
                  />
                  某公网安备xxxxxxxxxxxxxx
                </a>
              </div>
              <div class="flex gap-6">
                <a href="/" class="link">
                  <div class="i-fa6-brands:github w6 h6"></div>
                </a>
                <a href="/" class="link">
                  <div class="i-fa6-brands:bilibili w6 h6"></div>
                </a>
                <a href="/" class="link">
                  <div class="i-fa6-brands:x-twitter w6 h6"></div>
                </a>
              </div>
            </div>
          </NFooter>
        </div>
      </div>
    </>
  );
};

export default DemoLayout;
