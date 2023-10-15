import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export function CheckoutSuccess() {
  return (
    <>
      <Helmet>
        <title>Checkout success</title>
        <meta name="description" content="TrendTrove - Checkout success page" />
      </Helmet>
      <div className="p-l-20 p-r-20 max-width">
        <h1>Order received!</h1>
        <p>
          Your order have been received successfully and will be shipped as soon
          as possible!
        </p>
        <p>
          If you have any further questions about your order, feel free to use
          our contact form.
        </p>
        <Link to="/">
          <button className="primary-button">Back to store</button>
        </Link>
      </div>
    </>
  );
}
