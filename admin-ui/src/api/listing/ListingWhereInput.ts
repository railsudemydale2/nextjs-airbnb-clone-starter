import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapdata?: JsonFilter;
  mapData?: StringFilter;
  photos?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: JsonFilter;
  price?: FloatFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
