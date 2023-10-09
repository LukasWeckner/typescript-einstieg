type Restaurant = {
  name: string;
  location: string;
  priceRange: "low" | "normal" | "high";
  comment?: string;
};

export function Demo() {
  const thaiRestaurant: Restaurant = {
    name: "Thai Mo",
    location: "Pluto",
    priceRange: "low",
    comment: "Lecker!",
  };

  const germanRestaurant: Partial<Restaurant> = {
    comment: "eigentlich müsste hier gar nichts stehen",
  };
}
