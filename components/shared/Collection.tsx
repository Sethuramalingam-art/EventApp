import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import Each from "./Each";
import Card from "./Card";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubText: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: CollectionProps) => {
  const hasOrderLink = collectionType === "Events_Organized";
  const hidePrice = collectionType === "My_Tickets";
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <Each
              of={data}
              render={(event, index) => {
                return (
                  <li key={event._id} className="flex justify-center">
                    <Card
                      event={event}
                      hasOrderLink={hasOrderLink}
                      hidePrice={hidePrice}
                    />
                  </li>
                );
              }}
            ></Each>
          </ul>
        </div>
      ) : (
        <div className="flex flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubText}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
