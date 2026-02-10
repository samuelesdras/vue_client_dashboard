import api from "@/services/api";

export const loadOrders = async () => {
  const { data } = await api.get("/api/orders/");
  return data;
};
