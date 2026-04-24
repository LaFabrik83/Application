const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }

  try {
    const store = getStore("fabrik-points");
    const key = event.queryStringParameters?.key || "students";
    const result = await store.get(key);

    if (!result) {
      return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true, data: null }) };
    }

    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true, data: JSON.parse(result) }) };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ ok: false, error: e.message }) };
  }
};
