import { NBackground, NFooter, NSideNav } from "@nordstjerna/ui";
import { ParentProps } from "solid-js";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Home = (props: ParentProps) => {
  return (
    <>
      <NBackground />
      <div class="flex flex-col wfull hfull">
        <TopNav />
        <div class="flex-1">
          <div class="flex hfull">
            <SideNav />
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
                      某公网安备xxxxxxxxxxxxxx
                    </a>
                  </div>
                  <div class="flex gap-6">
                    <a
                      href="https://github.com/Hemifuture/nordstjerna"
                      class="link"
                    >
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
        </div>
      </div>
    </>
  );
};

export default Home;
