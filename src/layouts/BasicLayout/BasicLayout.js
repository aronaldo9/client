import classNames from "classnames";
import { TopBar } from "@/components/Layout";

export function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
  } = props;

  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />
      <div className="container mx-auto px-4">
        <div className={classNames({ "pt-28": relative })}>
          {isContainer ? (
            <div className="container mx-auto">{children}</div>
          ) : (
            children
          )}
        </div>
      </div>
      {/* TODO: Footer */}
    </>
  );
}
