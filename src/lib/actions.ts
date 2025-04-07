"use server";

interface FormcarryResponse {
  code: number;
  message?: string;
}

export async function handleForm(data: FormData) {
  try {
    const response = await fetch("example", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = (await response.json()) as FormcarryResponse;
    console.log("Formcarry response:", result);

    if (result.code !== 200) {
      throw new Error(result.message ?? "Error sending form");
    }

    return { success: true, message: "Form sent successfully" };
  } catch (error) {
    console.error("Form submission error:", error);
    throw new Error(
      typeof error === "string" ? error : "Error sending form",
    );
  }
}

export async function handleNewsletterForm(data: FormData) {
  try {
    const response = await fetch("example", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = (await response.json()) as FormcarryResponse;
    console.log("Formcarry response:", result);

    if (result.code !== 200) {
      throw new Error(result.message ?? "Error subscribing to newsletter");
    }

    return { success: true, message: "You have successfully subscribed to the newsletter" };
  } catch (error) {
    console.error("Newsletter form submission error:", error);
    throw new Error(
      typeof error === "string" ? error : "Error subscribing to newsletter",
    );
  }
}
