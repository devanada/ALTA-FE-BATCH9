import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "../../components/Layout";

function Detail() {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { uri } = router.query;

  useEffect(() => {
    uri && fetchData();
  }, []);

  const fetchData = () => {
    const body = JSON.stringify({
      articleUri: uri.toString(),
      apiKey: "5be4ae4a-ce76-4b72-a493-81e2d2261f36",
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    fetch("https://eventregistry.org/api/v1/article/getArticle", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data[uri].info);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Layout headTitle="Loading" headDesc="Loading">
        <p>Loading...</p>
      </Layout>
    );
  }
  return (
    <Layout
      headTitle={`Portal Berita | ${article.title}`}
      headDesc={article.title}
    >
      <div className="w-full h-1/2 block">
        <Image
          width={1280}
          height={720}
          layout="responsive"
          src={article.image}
          alt={article.title}
        />
      </div>
      <div className="w-full h-1/2">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="font-thin text-neutral-500">{article.data}</p>
        <p className="text-justify">{article.body}</p>
      </div>
    </Layout>
  );
}

export default Detail;
