import { Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter } from "next/router";

export function Pagination(props) {
  const { currentPage, totalPages } = props;
  const router = useRouter();

  const onPagechange = (_, data) => {
    const { activePage } = data;
    router.replace({ query: { ...router.query, page: activePage } });
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <PaginationSU
        defaultActivePage={currentPage}
        totalPages={totalPages}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        onPageChange={onPagechange}
      />
    </div>
  );
}
