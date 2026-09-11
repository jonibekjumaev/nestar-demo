import { useState } from "react";

const Community = () => {
  console.log("Community component - Pages Router");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      Community
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Pressme
      </button>
    </div>
  );
};

export default Community;
