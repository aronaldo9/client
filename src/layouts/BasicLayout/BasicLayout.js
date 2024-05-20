import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import {
  Footer,
  TopBarSmall,
  TopBarMedium,
  TopBarLarge,
} from "@/components/Layout";

export function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
  } = props;

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 996px)" });

  return (
    <>
      {isSmallScreen ? (
        <TopBarSmall isOpenSearch={isOpenSearch} />
      ) : isMediumScreen ? (
        <TopBarMedium isOpenSearch={isOpenSearch} />
      ) : (
        <TopBarLarge isOpenSearch={isOpenSearch} />
      )}

      <div className="">
        <div className={classNames({ "pt-28": relative })}>
          {isContainer ? (
            <div className="mx-auto max-w-screen-lg">{children}</div>
          ) : (
            children
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
