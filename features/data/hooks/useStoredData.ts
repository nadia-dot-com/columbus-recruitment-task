"use client"

import { useEffect, useState } from "react";
import { ApiResponse } from "../types/response.types";
import { getStoreData } from "../api/getStoreData";

export function useStoredData() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    try {
      setIsLoading(true);
      (async () => {
        const res = await getStoreData();

        if (isMounted) {
          setData(res);
        }
      })();
    } catch (error) {
      console.log("Error:", error);

      if (isMounted) {
        setError(
          error instanceof Error ? error : new Error("Failed to fetcjh data"),
        );
      }
    } finally {
      if (isMounted) setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
