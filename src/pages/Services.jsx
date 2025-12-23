import { useEffect } from "react";

function Services() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold">Services Page</h1>
      {/* your services page content */}
    </div>
  );
}

export default Services;
