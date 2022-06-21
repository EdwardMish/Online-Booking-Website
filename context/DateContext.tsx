import { createContext, useState, ReactNode, Children } from "react";
import { useRouter } from "next/router";

export const userDateContext = createContext<{
  currentStartDate?: string;
  currentEndDate?: string;
  pendingStartDate?: string;
  pendingEndDate?: string;
  setPendingStartDate?: (date: string) => void;
  setPendingEndDate?: (date: string) => void;
  dateSelectionIsDirty: boolean;
}>({
  dateSelectionIsDirty: false,
});

interface Props {
  children: ReactNode;
}

export const UserDateProvider: React.FC<Props> = ({ children }: Props) => {
  const { query } = useRouter();

  // handle multiple url cases for inconsistent params
  const currentStartDate = query?.setStartDate?.toString() || query?.start?.toString();
  const currentEndDate = query?.setEndDate?.toString() || query?.end?.toString();

  const [pendingStartDate, setPendingStartDate] = useState<string>("");
  const [pendingEndDate, setPendingEndDate] = useState<string>("");
  const dateSelectionIsDirty =
    pendingStartDate.length === 0 && pendingEndDate.length === 0
      ? false
      : pendingStartDate !== currentStartDate || pendingEndDate !== currentEndDate;

  return (
    <userDateContext.Provider
      value={{
        currentStartDate,
        currentEndDate,
        pendingStartDate,
        setPendingStartDate,
        pendingEndDate,
        setPendingEndDate,
        dateSelectionIsDirty,
      }}
    >
      {children}
    </userDateContext.Provider>
  );
};
