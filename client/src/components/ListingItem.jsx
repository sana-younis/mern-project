/* eslint-disable react/prop-types */
import { FaBath, FaBed } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://repstack.co/wp-content/uploads/2021/05/real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover-scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full mb-3">
          <p className="text-lg font-semibold text-slate-700 truncate ">
            {listing.name}
          </p>
          <div className=" gap-2 items-center">
            <div className="flex gap-2 items-center">
              <MdLocationOn className="h-4 w-4 text-green-700" />
              <p className="text-sm text-gray-600 truncate w-full mb-2">
                {listing.address}
              </p>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              {listing.description}
            </p>
            <p className="text-slate-500 mt-2 font-semibold flex items-center mb-2">
              $
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <div className="text-slate-700 gap-4 flex">
              <div className="font-bold text-xs flex gap-2 items-center">
                <FaBed />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </div>
              <div className="flex gap-2 items-center">
                <FaBath />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingItem;
