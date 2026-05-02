export async function Log(stack, level, packageName, message) {
  try {
    await fetch("http://localhost:5000/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}