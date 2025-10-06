export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://dataapi.pixxicrm.ae/pixxiapi/v1/properties",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-PIXXI-TOKEN": process.env.PIXXI_API_TOKEN, // secure env variable
        },
        body: JSON.stringify({
          listingType: "NEW",
          size: 1000,
          sort: "ID",
          sortType: "DESC",
        }),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching CRM data:", error);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
}
