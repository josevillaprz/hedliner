interface FormattedDate {
  month: string;
  day: string;
}

export default function formatDateToMMDD(dateString: string): FormattedDate {
  let dateOb: FormattedDate = {
    month: "",
    day: "",
  };

  const date = new Date(dateString);

  if (date) {
    dateOb.month = date.toLocaleString("default", { month: "short" });
    dateOb.day = date.getDate().toString().padStart(2, "0");
  }

  return dateOb;
}
