import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import ImgThunder from "../../media/thunderSmall.png?jsx";
import type { Product } from "~/components/interfaces";
import styles from "./index.module.css";

// import type {ApiManagementInterface, ApiProducts, ApiProduct} from 'apigee-x-module';
// import {ApigeeService} from 'apigee-x-module';
import { GoogleAuth } from "google-auth-library";

const projectId: string = import.meta.env.VITE_PROJECT_ID;

const auth = new GoogleAuth({
	scopes: 'https://www.googleapis.com/auth/cloud-platform'
});

// const apigeeService: ApiManagementInterface = new ApigeeService();

export const useAPIs = routeLoader$(async () => {
  let products: Product[] = [];
  const token = await auth.getAccessToken();
  const response = await fetch(`https://apigee.googleapis.com/v1/organizations/${projectId}/apiproducts`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (response.status == 200) {
    // successful, return products
    products = (await response.json() as {apiProduct: Product[]}).apiProduct;
  }
  // const products: ApiProducts = await apigeeService.getApiProducts();
  console.log(JSON.stringify(products));

  return products as Product[];
});

export default component$(() => {

  // const apiSignal = useAPIs();
  return (
    <section class="section bright">
      <div class={styles.title}>Explore our APIs</div>
      <div class={styles.grid}>
        <div class={[styles.card]}>
          <ImgThunder style="width: 44px; height: auto;"/>

          <div>Orders API</div>
          <div>
            
          </div>
        </div>

        <div class={[styles.card]}>
          <ImgThunder style="width: 44px; height: auto;"/>

          <Link href="/apis/123">Broadcast API</Link>
          {/* <div>Broadcast API</div> */}
          <div>
            
          </div>
        </div>
        {/* {apiSignal.value.map((product: Product) => (
          <div class={[styles.card]} key={`product-${product.name}`}>
            <ImgThunder style="width: 44px; height: auto;"/>

            <div>{product.name}</div>
            <div>
              
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
});
