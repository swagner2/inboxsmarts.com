function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
  <div class="text-body col py-5">
    <h2 class="title fw-bold">
      Grow your ecommerce store with smart email stratgies. Retain more buyers. Grow your revenue from your email lists. 
    </h2>
    <p>
      Get a FREE Email Marketing Audit! In 30 minutes we can look under the hood of your Klaviyo account and give some actionable advice on how to get more sales, retain more buyers and grow your revenue. 
    </p>
    <div class="badges mt-5">
      <p>Get the App</p>
      <div class="badges-items me-3 d-none d-sm-block">
        <a class="badge-item text-decoration-none" href="#1">
          <img
            class="item"
            src="./Images/Store badge.svg"
            alt=""
            srcset=""
          />
        </a>
        <a class="badge-item text-decoration-none" href="#2">
          <img
            class="item"
            src="./Images/Store badge-1.svg"
            alt=""
            srcset=""
          />
        </a>
      </div>
    </div>
  </div>
  <div class="col container-body overflow-hidden">
    <img class="img-fluid" src="./Images/mockup-mobiles.png" alt="" />
  </div>
</div>
  `;
  CTA.appendChild(Container);
}
CTA();
