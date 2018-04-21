import { forceCheck } from "react-lazyload";
import { navigateTo } from 'gatsby-link';

export function featureNavigator(e) {
  e && e.preventDefault();

  if (this.props.navigatorPosition === "is-aside") {
    if (this.props.isWideScreen) {
      this.props.setNavigatorPosition("moving-featured");

      setTimeout(() => {
        this.props.setNavigatorPosition("resizing-featured");
        setTimeout(() => {
          this.props.setNavigatorPosition("is-featured");
          this.props.setNavigatorShape("open");          
          navigateTo("/");
        });
      }, 300); // 300-500, back home page animation
    } else {
      setTimeout(() => {
        this.props.setNavigatorPosition("is-featured");
        navigateTo("/");
      }, 0);
    }
  }
}

export function moveNavigatorAside(e) {
  const target = e ? e.currentTarget : null;
  const dataShape = target ? target.getAttribute("data-shape") : null;
  const navigatorShape = dataShape ? dataShape : "open";

  if (this.props.navigatorPosition === "is-featured") {
    if (this.props.isWideScreen) {
      // Posts list moving aside
      this.props.setNavigatorPosition("moving-aside");

      setTimeout(() => {
        if (typeof window !== `undefined`) {
          if (window.location.pathname !== "/") {
            this.props.setNavigatorPosition("resizing-aside");
            this.props.setNavigatorShape(navigatorShape);
            setTimeout(() => {
              this.props.setNavigatorPosition("is-aside");
              setTimeout(forceCheck, 600);
            });
          }
        }
      }, 900); // 800-1000, show aside timeout
    } else {
      setTimeout(() => {
        this.props.setNavigatorPosition("is-aside");
      }, 100);
    }
  }
}
