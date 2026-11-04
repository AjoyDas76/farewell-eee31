// ইইই ৩১তম ব্যাচ (ইভিনিং) ফেয়ারওয়েল নাইট: সেটিংস ও ডাটা
// এই ফাইলটা index.html এর পাশে রাখো।

const CONFIG = {
  // Google Sheet এর "Publish to web" থেকে পাওয়া CSV লিংক এখানে বসাও।
  // খালি রাখলে নিচের SNAPSHOT তালিকা দেখাবে।
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIORD07AAbxcwSqFV7TaoQvtIRXSKJYpowZpTZl6Mrkk5tqhYMmdqDUcu_7IBF3ExJaZ6rcDVsJ4O8/pub?gid=0&single=true&output=csv",

  // শিটের কলামের নাম (হেডার যেভাবে লেখা আছে ঠিক সেভাবে)
  COL_ID: "Student ID",
  COL_NAME: "Name",
  COL_PAID_BY: "Paid by",   // খালি থাকলে Pending, "bKash" বা "Cash" লেখা থাকলে Paid

  // অনুষ্ঠানের সময় (কাউন্টডাউনের জন্য)
  EVENT_START: "2026-11-14T18:00:00+06:00",

  // প্রতি শিক্ষার্থীর ফি (টাকা)। জমা ও বাকির হিসাব এটা দিয়ে হয়।
  FEE: 1000,

  // পেমেন্টের শেষ তারিখ
  DEADLINE: "৭ নভেম্বর ২০২৬",

  // শিট লোড না হলে যে তারিখ পর্যন্ত তালিকা হালনাগাদ বলে দেখাবে
  SNAPSHOT_DATE: "৫ নভেম্বর ২০২৬"
};

// শিট কাজ না করলে এই তালিকা দেখানো হবে।
// by: "" মানে এখনো পেমেন্ট করেনি, "bKash" বা "Cash" মানে করেছে।
const SNAPSHOT = [
  // { id: "EEE 031 07391", name: "উদাহরণ নাম", by: "bKash" },
  // { id: "EEE 031 07392", name: "আরেকটা নাম", by: "" },
];
