import BlogLayout from "~/component/BlogLayout/bloglayout";

export default function HowItsmWorkPage() {
  const tableOfContents = [
    "Introduction",
    "What is ITSM?",
    "How ITSM Works?",
    "Benefits of ITSM",
    "Conclusion",
  ];
  return (
    <BlogLayout tableOfContents={tableOfContents}>
      <h2>Introduction</h2>
      <p>This is an introduction to ITSM...</p>

      <h2>What is ITSM?</h2>
      <p>ITSM stands for IT Service Management...</p>

      <h2>How ITSM Works?</h2>
      <p>Here’s how ITSM works...</p>

      <h2>Benefits of ITSM</h2>
      <ul>
        <li>Improved efficiency</li>
        <li>Better user experience</li>
        <li>Reduced downtime</li>
      </ul>

      <h2>Conclusion</h2>
      <p>In conclusion...</p>
    </BlogLayout>
  );
}
