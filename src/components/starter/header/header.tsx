import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <span class={styles.logo_title}>apigee </span><QwikLogo height={50} width={143} /><span style="left: -94px;" class={styles.logo_title}>portal</span>
          </a>
        </div>
        <ul>
        <li>
            <Link
              prefetch
              href="/apis"
            >
              APIs
            </Link>
          </li>
          <li>
            <a
              href="https://qwik.dev/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.dev/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.dev/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
