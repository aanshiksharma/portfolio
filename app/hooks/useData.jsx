import { useState } from "react";

export const useData = () => {
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = process.env.BACKEND_URL;

  const fetchSkills = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/skills`);
      const data = await res.json();
      setSkills(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  });

  return { skills, projects, categories, loading };
};
