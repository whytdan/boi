import React, { useContext } from "react";
import classes from "./Footer2.module.css";
import boi_logo from "../../images/logos/ebbr_logo.png";
import logo1 from "../../images/logos/logo1.png";
import logo2 from "../../images/logos/logo2.png";
import logo3 from "../../images/logos/logo3.png";
import logo4 from "../../images/logos/logo4.png";
import logo5 from "../../images/logos/logoAOS.png";
import logo6 from "../../images/logos/ubk.jpg";
import logo7 from "../../images/logos/min_economy.jpeg";
import logo8 from "../../images/logos/amcham.png";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";
import styles from "../UI/Slider.module.css";
import { LanguageContext } from "../../App";

const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "ease-out",
  pauseOnHover: false,
  centerMode: true,
  centerPadding: "0px",
};

export default function Footer2() {

  const langState = useContext(LanguageContext);

  return (
    <footer className={classes.footer}>
      <div 
        className={[classes.footer__section, classes.responsive_section].join(' ')}
        style={{alignItems: 'center'}}
        >
      <div className={classes.footer_about}>
              <img
                className={classes.footer__section_boi_logo}
                src={boi_logo}
                alt="boi-logo"
              />
              <p>
                {
                  langState.lang === 'ru' ? `Институт Бизнес-омбудсмена Кыргызской Республики финансируется
                  Специальным фондом акционеров Европейского банка реконструкции и
                  развития (ЕБРР)` : langState.lang === 'kg' ? `Кыргыз Республикасынын Бизнес-акыйкатчы институту Европа Реконструкциялоо жана өнүктүрүү Банкынын (ЕРӨБ) Акционерлеринин Атайын Фонду тарабынан каржыланат` : `The  Business Ombudsman Institute of the Kyrgyz Republic is funded by the Special Fund of Shareholders of the European Bank for Reconstruction and Development (EBRD)`
                }
              </p>
            </div>

        <div className="footer-social-media">
          <p>
            {
              langState.lang === 'ru' ? 'Мы в социальных сетях' :
              langState.lang === 'kg' ? 'Социалдык тармактагы баракчаларыбыз' :
              'We are on social networks'
            }  
          </p>
          <div className="social-medias">
            <a href="https://www.linkedin.com/company/boikyrgyzstan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={50}
                height={50}
                viewBox="0 0 50 50"
              >
                <g
                  id="Group_123"
                  data-name="Group 123"
                  transform="translate(-826 -156)"
                >
                  <g id="Group_122" data-name="Group 122">
                    <g id="Group_101" data-name="Group 101">
                      <g id="Group_121" data-name="Group 121">
                        <g
                          id="Component_1_20"
                          data-name="Component 1 – 20"
                          transform="translate(826 156)"
                        >
                          <circle
                            id="Ellipse_21"
                            data-name="Ellipse 21"
                            cx={25}
                            cy={25}
                            r={25}
                            fill="#2653ad"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <image
                    id="linkedin_1_"
                    data-name="linkedin (1)"
                    width={22}
                    height={22}
                    transform="translate(840 169)"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAwkFJzCBfoZMAAAw7klEQVR42u2debxXVdX/P/tyL9OFC6IhIihigQooajlLDpiKOOWQmj1lmWX1ZE9p2mz9srThlQ3WY5nmUE/mGOaQA6KIkQOmCDiDgICIzFyme+/6/XEB4d5zvtPa56z93d/P+/UqucPed63zPftz1lp7n70djJDeGIIhGIJd0R/9sD36YTvUA2hCFwAr0AZgOZbiXSzFEszFm3gTs91iK3sJiRGX75+TwTgYozESozCkog6W4gW8iOmYihmuNV/bCYmPnARAdsdxOAyHYZC3LldiKqbgQTxNISCkUjIWAOmCMTgJ4zAssz/xLv6Je3GPW5WtJ4SQspCD5GpZIPnQLLfJR6W7tc+EEEhvuUCez2nob80yuVb2svaekBpGhso1sspg8G+mVR6Qo6yvAiE1iIyUW2Sj4eB/j3/LKZLzDAchNYwMlmulxXrcb8MzjAQIyQHpIz+TddbjPZH7ZIT11SEkauREmWc9zguwUX4pvayvESFRIrvKA9YjvATekI9YXylCokPOkKXWY7tE2uRaabS+XoREg/SRW61HdZnMkn2trxohUSB7yEzr8VwBa+V86ytHSNUj58ga67FcMf8rXa2vHyFVjFwqbdajWMVE6Wt9DQkJgzJXy0k9rsEF1karmYlx7k1rIwixpywBkO64A+OsTfbCWzjavWxtBCHWlCEA0hN34xhrg72xGGPddGsjCLGlZAGQnrgXR1ib65V3cDQlgNQ2JQqANOAunGBtrHcW43D3irURhNhRV8ovicO1EQ5/oD/uk52sjSDEjpIEAFfgPGtDM2J3/EN6WhtBiBUlpADyCdxkbWam3InTnVgbQYgFRSMAORh/sDYyYz6K71mbQIgNRSIA6Ydp2NXayMwRnOzusTaCkPwpKADicDdOsjYxF5ZiXzfX2ghC8qZwCnBxjQx/oB9ultIKooRERIEIQPbENNTSURsXu59bm0BIvqQKgNTjSXzI2rxcWY/93QxrIwjJk/Sw9+s1NvyBbvgD0wBSW6READIEM5DHAplWvI5X8DJewatYieVYi2a3XBrRE73RGz0xFMMxDMMwPBdrgAtc7JOehGxFmgBMwIkZ/+U38DAexsNuWSm/LF0wGmMxFodlXJVYiuFuScaeExI2clymO/LMkktlYIWW9ZBz5EFpzdC631lffUJMkbrMTvbdINfLIR4s3EW+I29nZONGGW79CRBiiJyXycBqlb/JBzxa2SgXyaJMLL3d+hMgxAzpKm9mMKju9jn4t9jaJD+Q9d5tbZMPWn8KhBghn/E+oJZKhtuIygj5t3eL77T+FAgxQbrIK54H0x3SP2Ob6+VS2eDV5jYZaf1JEGKAfMzrQGqVb0mZG49XaPcRssSr5TdbfxKEGCBTPA6i1XJqjpYPlRc92r5Bdrb+LAjJGdnP4xB6V/bL2fomecKj/dwkhNQacr234bNcDN4kkCaPBcEFUm/9eRCSI9IoKz0NnjUyxsiHPvK0NwkYb/2JEJIj8klPA6dVDLcQl/4yz5MfXBBEagmZ6GngfNfYjwNlnRc/1sv21p8JITkhO0qLl2Ezwf6devmcJyn7tLUnhOSEfN7LkFkgfa09AQC5zYs391r7QUhOyCNehsxp1n5s8maALPXgzYYw5IyQjJE+XhbT3m3tx1YefdaLoJ1h7QchOSCnehgszTLI2o+tPHJeVjVeZ+0HIVmyuWB3rIe+fuvmW7vzHk7wHQ/d+LguhISOvKp+Vq7O+q2/Crx61EMMwP2BSMTUAYBsj93VPf3aLbZ2phM+ViQcYO0EIdnRngJ8qJRjwgvSgt9Yu9IZNxnPqjuptdMRSE3RLgD6p9y97i1rVxLR7/LPCIBEzOYIQEuox2n8GauUPYyWbtZOEJIV7QKg3QRzAR6wdiQZtxq3KbvoBm4PRqKlDpBdMEDZywTXau1IKn9X98AkgERLHeDhCfcPazcK8DDWKntgBECipQ7AEGUfzXjU2o10XDMmKrvY1doHQrKiDsAuyj4mu2ZrNwrykLL9EGsHCMkKHxHAU9ZOFOFpZXutQBISLD4EQDvAsuY5bFS17y39rF0gJBvqoM9xn7F2ojBuLWYqu2AVgERKnXTHjqoelrqF1k4UZYay/RBrBwjJhjrsoHwPYI61CyXwprL9DtYOEJINdeih7EE7uPJgrrJ9T2sHCMmGOvXNXQ0CoLWRAkAiRS8AS6xdyMFGbZRESKDoBUC70DYPtAuVGAGQSNELQNirAP3YSAEgkaIvAq6zdqEEtALQaO0AIdlQhzZ1D+HTRdk+3JedCVFRhzXKHqrh6dhL2X61tQOEZINeAKohP9YKgPYaERIoegHQDq480EYpFAASKXoB2MnahRIYqGzPFIBEil4Ahli7UAK7KdszAiCRohcA7eDKgyHK9owASKTUYZlyJn+w1Fs7UZShyvbhv/BMSEXUOVG+KtMQ+q654rCvsovZ1j4Qkg110L/Rf6C1E0XYXfk+fwvCPPaMEDV10D/fQj8+UytQc12LtQuEZIOPCOBgayeKcJCy/RxrBwjJCh8CsJeEPRNwgrI9KwAkWuoAvKHu5URrN9KRkeqJyjnWPhCSFXUApmODspeTrN0owMnqHp61doGQrKgD3DpMV/YyRvpbO5LKacr2EvzBJ4RUTPvb/NrDvRpwnrUjycgB6jUAr7tq2PWQkIrwIwDABRLmxiCfU/cQ+smHhCjwJQBDMdbalc5IX5yl7oQCQCKmXQBmYbm6p0utXUngyx62K5lq7QQhmSP/FD1HWnvRwaftZJnap2bpbu0HIdmxOXN/yENfP7R2pgMXo6+6j8dcNex6TIgOGekhAhDRz7n782hnWeXBo69Y+0FILsg8D8NlnjRZ+7HFn797kbTh1n4QkiXvTd7d7aG3QfiRtUPtyJleVie+7F629oSQXJAjvDwxW2WMtSeA7CCLvHjz/6w9ISQnpE4WeBk0C2Vnc08e8OKJyD7WnwohuSG/9DRsJkuDqR9XevJjhvUnQkiOyL6eBo7INYZenCFtnry42PoTISRX5DlvEvB9Iw8+Ims9ebBRBlh/HoTkinzRmwCIfMvA/rHehr/IHdafBiE5I71luUcJ+GbO1h8jazxaf4T1p0FI7sgvPA4hkb9Ij9wsv0A2eLR8ujjrz4KQ3JHdpcWrBDyRx15B0iC/82q1SKAbnBCSMXKL56H0lozP2OI95V+ebZ5jO5FJiBmyp7R6Hk4ifxPd2Tzp1tbLpR4Lf5u50PpTIMQMudX7gBJZKJ/1/1SVY+TZDGydxz0ASA0jQ2V9BsNKZI5c4O8kYTlEHsnESub/pNaRazIaWiKvyCXaBTbSU86VRzOzcLp0sb7+hJgiO8qKzAaYyEaZIKdJ7wrsapAx8nuvaxU6M8766hOSHymz3fJl/DLjv9yCpzERj+AZt6rYr0pXjMCROBpj0Ctjq+52p2b8FwgJiDQBqMfTGJ2TDQvwMl7BK1iBlViJNViLevRGHzSiN4ZiDwzDEHirHRRkDfZyc3PympAASF3vJgfhCdRaNnyJ+5m1CYTkSep5Pm4qam0w/Au/sDaBkHwpsOJduuFpjLI2MDeasa97xdoIQvKlwIl+bj0+idrZFf8SDn9SexQ80tM9h69aG5gTt7nfWptASP4UfelVbsHHrY3MnNfwQbfC2ghC8qe4APTGE9jb2sxMWYVD3XRrIwixoK7YL7hVOAlvW5uZIW04l8Of1CpFBQBwb+K0iIuB33ATrE0gxIoSBABwU3AmWqxNzYTfuJ9Ym0CIHSUJAODuwXloszbWOzfjImsTCLGkRAEA3C34MsTaXK/cik+7+ESNkDIoa+9bOR/Xli4ZgfNXfMLFmdYQUjJlDWd3HT4dSS3gOnycw5+QspFjMt0sJB+u5K7/hABlpgDtyN64F4OsDa+YFnzR/d7aCELCoKInoeyM23CwtekV8Q7OchOtjSAkFCoq6bm3MAZXWZteAVMwmsOfEC/I2bLMOpkvgxb5Mc/7IcQjMlgmWo/rEpkjH7a+WoREh9TJlzLepltPi/y6kk3ICSElIAPkJusxXoD/yIHWV4iQyJGjMzmlT8sCuYDn/BCSA1InH5fZ1iN+K1bKd6XR+qoQUkNIg/yXzLQe+SKyQq6UftZXg5AaROrkdHnccPC/Jl+TrA8QI4QUQkbKNbm/M7BR7pJjJZa3FQmpbqS7nCg3yepcBv8zcpHsaO0xIdVG5m/FSROOw/E4DgMy6X4NJuI+3OvmZe0HITGS02ux4rAvxuAwHOpJCFZjKqZgMp5w6/PxgJAYyf29eBmK0RiJURiFIehWVtM2zMcsvIDpmI4XuZ0HIXoMN8YQh52wG4agP/phe/TD9gB6oDsAoBUrAazCUryLd7EY8zAH89wG68tFCCGEEEIIIYRULdwck0SK9MF26Iu+6Ivt0ABgOwBAb7RgLYDNdSZgFVZjDVZgFdZgda2dEk0BIFEgjRiGYRiMQRiEnbALBqC+so7wDt7BEizCYizBYszHbMxxa6z9ywoKAKlapAdGYT+MxHAMw+BM7+UlmIM3MQevYCZmuqXWnvuDAkCqDOmC0TgU+2E/7FnhU17LIszALMzANDxf7QvRKACkSpAGHIDDMQaHosnali1swPN4Gk/habxUnedMUgBI8Eh/HIfxOAZ9rS0pwGpMxcN4GNNcVR2hSwEgASOjcQbGY29rO8pgMR7FI/iHW2htSGlEKwDSvqh4tdtobUn1IL035dR9t9wXbViBjW61gS1740ycgWHW16RC2vAM7sYEN8PakGKUKAAyAMOwM3qjO1rRjNVYgWasxTI0o9mtzMo4aUID+qArGtET3dCEevTt8FUXNKErGtEdPdAT3fDe2wRb0z7juwJv4x28g8VYjDcwC2/kLQ6yK0ZgEPpiA5qxAmu3/P9yrHPNnv9WA3qhEV2xHbqiEb3RFX3QHT3QhG7ojZ7ohr7ohkb0QHf0RDf0QqFjU9ajGUswF3MxF29iNqZl+KkPwLk4D3tl1X+uvI478Wf3vLUZ6RQVABmLj2EcBhb8pdWbRKFtq8UVLQA2ov3ZsQJtKTdY+3BtH7qN6AqgFxq2DPJsWYdn8S88gMeyf7NQRuHTOAVDCv7ScqxDM9ZiHQBs+W8z1m/573YdWrhNWXH7f9uvZV84dEPPjB1qw0t4GPdgks9rJw04AZ/G8Ua1/eyYjpvxf26+tRlJFBQAGY1f4XBrEzNnGf6K37iZWXUve+EnGBdpsrUAf8Bv3BJ9R9Ifn8OF2Mnaocxow6P4I+4I7Y3WArelnIPr0MPawJwQ3I5L3Wzv3dbhG/ge4j6TcDl+iKtda+UdyH74Ms7KPOILgUX4Pa51C6zNeI9UAZCTcVekT600mnGhu8lnh9ITt2K8tVu5MBHnuLcraShH4Vs4ytr8XNmIu/ArN8XajHZShrgMwzOoxfP0fui+46sr6Y77cYS1Q7nxEo4oTwLEYTy+iYOsDTfiMfzQPWxtRLoA3FMjT67OfNX9wk9HcivOtHYmV6bhkNIXxso4XIHR1iYbMxVX4F7bhUOJAiAfxiRLo0zZgAN8TNvI5/E7a1dy52fuklJ+TQ7GlRhjbWwgPItL3SN2fz5ZAO7EqXYmmfO4+7C2C9kJLwW0Yj0vNmIP90bhX5HhuAonWxsaGPfh61ZLhhLO0ZHtcYLt9TBmjOjz0m/U4PAHGnBZoR9Lk/wUL3D4d2IcnpdrJZuTM4qQdJDWGehqfEGsOVfXXPrgM9YuGPEx6Z78A6mT8/AyLq75eyuZLrgAL8mF+R9sl/QHP2J9NczRRkBnZL4SL1SacGzSt2UvPI7rMzodKhb64Ld4Qkbm+0c7CYDU1cDav2IMkfep2o+zdsCQTnePdJXvYRoOtTasKjgY0+SKtCgqCzpHAHtjB+urEAB7qlrX8s3eoX4iB2AaLq+JVX5+aMA38bSMyuvPdRaA/ayvQBAMrryp9EN/a/MNGf7eP6VeLscUjLA2qeoYiafkIsllHW5nAeDHBQC9FG1refgDO0hj+z9kGKbge9G92ZcP3XE17pccXo2iACTTaNQ2BnYCADkP03CAtSlVzbGYJpknk50FII6NGLRoNnisys0hPdJDusvvcX3NC6GeAZgkl2b7JzoIgDQU2fqjVtBsc1HrB5ePxr/xWWsjIqEeV8rNkuFL+R0jgIHoYu1zEGg2C6v1XQhvrKpNPMPnXDwimc3MdRQARfU7KhgBVE5t7SKRBwdjqrw/m647CsAga18DgQJAQmJ3TJZMJug7CsCO1p4GgmYQ13oKQLJgAB6VDHZO6igA/az9DATNIGYEQLKgCfeJ9/d0Oy7T2K6iXuKDKUAcLMJCvIt1WIu1WLfpf9i01e3mzdQb0YQmNKIR26GPtcEF6Ybb5GT3kM8uKQDJcBagOlmI6XgRc/EWFmA+FpW7Cbd0xfuwI3bE+7AjdsFu2A27BbUzdg/8XU7yuZcgBSAZRgDVQyuew3N4EdPxgntX15XbgLfw1rbfkwHYDXthBEZhVAA1sh6YIOPcJF/ddRSAWtwJOAkKQPi0Yhom4TE87lZl+WfcIizCv9r/LTtgbxyIQ3CQ4TuzPXC3jHEv+OmsowDk+CZy0DAFCJm3cBcewOTszidMwy3BREwEABmOgzEGx5qsnO2D++QQN9eLR9t+Kf/BPgYOhcfh7onKG0srct/aqUaYi7txG550wbxvIUNxIsbj8Nx3PHgVh7p39N10FICZyq0wYuEg9+/KG8s6boDhnXdwI251z1ibkYz0wSk4G0fn+vLzZIzVnzTY8UnFG7cdXR7PJMAvj+EcDHaXhDr8AbfC3eiOw0B8EYrIsUwOxy89WL7tlzJPuRh4Pa7O7QIU4kjlu+ijNYeDyLJNx3ZXxkJ4PaGwbD4e0ILw5bgR17pZ1maUg4zAF3BuTtvCX+D+4Nf4d0THslzcLu7HT5R+qHZFUF7Fp4yv3ePKa+eLxXKZVOmslPSWC2VGDtdonRyss5QpQDK6FIATgVoW4KvYzV2Z7QRfdrhV7ncYhdPh4ZC5gnTDHaLago4CkAxrAHYswpewu/uFW2NtiA7X5u7AvjgVz2X6Z3bCDZrtQ7cRAHFoyOXahI9uCDMCqJT1uArD3DVunbUhfnDi7sb+OBvzMvwj4/DlyhtvGwE0cDOHTTAFsOAfGOEuq9awPw0n7q/YA9/H2sz+xFUyutKm2woAE4DNMAXIm1k42p3oXrc2Ixtcs7scIzAho+674S+V7htIAUhGJwCt1uZXGS24Cvu5idZmZIub7U7GmViaSed74ruVNeSS1WR0z3BGAOUwA4e6y2LJ+gvjbsNI3JtJ1xfL/pU021YAJP9LEigUgHxoxY+wvzNe+ZAnbiFOxFcyuEPq8QepYCEyBSAZpgB58A6Od99y663NyBcn7pc4Egu9d7wvLim/EQUgCXG6IcwIoBQmY7Tf7a2qBzcFH9y8x4BHviNDym2yrQAE85KlMdppPE4DFkPwUxzlFlibYYdbgCNwvedOe+Cn5TZhBJCE9gnOCKAwa3Gm+7qrcZl0G3A+rvLc6elyZHkNKABJMALIkqU41t1ubUQIOHGX4SLPcfdvyisFUgCSoABkx2s4yE22NiIc3K9wvtei8V64oJxfpwAkwRQgK6biEPeqtRFh4W7AZ72OvO9IGQezUwCS0D7BOQ2YzBR8xMc+drHhbtC8ztOJAeX0RgFIQisAjACSmILjY3vRxxfuN/i+x+6+LiWf78FpwCS0A5g1gM48juM4/NNxl+Mab531xddK/VVGAEkwAvDNFJzgVlsbEThfwSPe+rpISjy4hAKQBGcB/DILJ3H4F8O14Ey85qmzXvhSab9IAUiCKYBPFmKcy+Yl2MhwS3ESfJ129N/Sq5RfYw0gCaYA/liFE9wcayOqBTcL53vqqh8+W8qvbSMAro0SAIARgD/acLbLdlPMyHC34QZPXX1Vuhb/pY4bgvDZBbAG4I8rXDbbX8TMRXjDSz+DcFbxX+ooAOqzxqKAAuCHiV5nt2sEtwqf8LSU7KLiv8IIIAkuBfbBfJyl3FehRnFP4kovHe0nRQ/IowAkUdsRgJ8detpwLpf9VswPPU0IfrHYL1AAkqhtAVjkpZdfucesHale3LriQ7ckPlbs4DAKQBK1nQK87aGPV/EtazeqG/cgfOyZ0A2fLPwLFIAkajsC0E/bteE812ztRtXzP/CxevK8wj+mACRR2wJwv7oGfYObYu1E9ePmeykF7ikHFvoxpwGTqOkUwC2Fbseelfi2tQ+RcLWXdOxThX7ICCCJWt8QRPfk+ZHzU0asedwa/MhDN2cXOjeQApBETUcAgPsnnqy48eu42tr+iLgWc9R99MHJ6T+kACRR2zUAALgAlRXxBJ+rtZN+ssSt97KW8mPpP6IAJFHzAuBm4L8ravhH529TCwIAN0N/ZPrx0iftRywCJqHN4ateAAB3fQXPnhmVnE5HCuFa8St1J91wYtqPOgpABLeuB7QCEMVL1e5yfKOsLWJex0fccmurI+R66LdTOSPtB0wBktAO4CgEAHBXYnzJE1EvYGwtn/WXHW41/lfdybFpSQBTgCQoAJtw92Ef3Fg0IhL8Cgdy35/M+LX6Ba1uGJf8A0YASVAAtuDedp/CCNyUuiy1DXfiAHeRW2dtaby4RbhN3cn45G9TAJKgAGyDe9l9EjvibPwRz211h7yD+/A/GO5Oc89YWxg9f1T3cHzyoaEdv0kBAPQDuNpXAibgmvFX/BWQLmhCH7Thbc7358hjeBUfUPWwHQ5FwgvajACS0ApAxNuru1a3zM1xczn888SJh61CE6cCKQBJMAIgoXGDeor+hKRvUgCSYA2ABIZbhPuVXewhgzt/s2MNgNOAAAXAGHHYGbuiPwaiP/qjCb3RC00AGtG+0/0KtGE5BMshWIpFmIe3MA/z3QpryzPl1vT1fCVyNP7U8VssAiZBAcgdacAe2Bt7Yy/sjqHoVlEfqzEHMzEdL+KpCBcl3YN16K7qYSwFoDQoALkhO+AwHIpDsH9lg34bemEkRuJMAJC5eBKT8KCbbe2hL9xKeQCnqLo4WpzrUKCmACRBAcgcqcOBOB7HYf9OdSg/7IJdcBYgr2ICbse/XQwzM7cpBWAARuDFbb9FAUiCApAh4nAQzsQZ2DmXP/cBfA1fwzy5Gdc7/Yu1tuiTgCM7CgBnAZKgAGSE7Chfx0t4El/JafhvZjC+iVflERkvzvoaVI5bhYeVXRzW8RsUgCQoABkgo+XPmIerMMzIAIejcA9myCeli/W1qBjtVCAFoCQoAJ6Rw+SfeA7noMHaEuyJP2G6nF6lkcADyvYDZfdtv0EBSIIbgnhERsjfMBkfsbZjK/bEbZgko6zNKB/3Bl5VdtEhBuB+AEkwAvCEbC/X4YX0/WgMGYNn5cein3rMG89JACOAJPgugAfEyWfwMj6T0TSfngZchqdltLUZZaJNAg7a9ksKQBKMANTIINyP67C9tR1FGIWpcoG1EWXxmDJK31N6bf0lBSAJCoASORMv4FhrK0qiG66VG6onFXDN0G2/0gX7bv0lBSAJ7gegcb5ersSt2M7ajjL4FCbKDtZGlMwTyvYf2voLCkASrAFUjLwPj+JSayvK5hA8JgOtjSgR3dGtFIASYApQITIM/+q82KQq2AuTZJC1ESUxRXl/FRQATgMCFIAKkQPxJHbX92PEBzBJdrI2ojhuWcf1/GUyVJre+4IRQBIUgAqQQ/Bg8FX/wuyO+9NP0QsIXRXAYe/3vqAAJEEBKBs5DA+gSd+PMfvgLrFfrlyMp5XtKQBFoACUiYzCBPS2tsILR+KX1iYUZZqy/T7v/ZMCkAQFoCzk/Xiwqqb9CnOhnG9tQhFmYq2qPSOAIvBloDKQ7XAvBlhb4ZWrRXcIR8a4Fryg6mCUbBn3nAVIghFAyUgX3GL2hn9WNOLGwPcM0CUBjdiyQTgjgCQoAKXzo7RzZ6uag3GZtQkF0VYBtkg2BSAJCkCJyPG4xNqGjPiu7KvvJDOeU7bfkuJQAJLgUuCSkIG4EdW5s05xuuKGgNOAl5T3aFoE4ER9AlkM8GWg0rgO77M2IUP2waesTUjDrcE8VQepEQBjAIApQEnIeTje2oaM+YE0WpuQykxV69QaAAUAUA9gJ/FLgAzAz61tyJyB+Jq1CanMUrUeIu2nLFIAEtEP3/iTgCsiWvqTziXBvh6kE4B6DGn/BwUgCb0ARF4GlNHh5sde6YXvWJuQgi4F2JIEdBYALgXyIQCxpwA/D3arT998SsIsdL6kbL9JAOo7/YARAAWgCHISjsrhz6zBTLyKxViERViM1WgGsAotqEdv9EYP9ML2GIY9MRy7ZihHPfAFfD8Hb8vELZUV0Ly6TAEoAAWgANKAn2TYfRuexoN4DtPxhivxKkp3jMaHMRZHJNzPer4gV7l1GXpcKbMxWtF600QgBSAJCkAhzsfwTPpdh7vwDzzolpTb0K3DVEzFVbIDTsPnVcMiif44F9dl4rEOnQBs2rmJRcAk9CW8aAVAumQyNTYHl2GwO8f9pfzh/x5uibvW7Ysj8Jhn674S5EmCs1WtB7a/EcgiYBKMANI51fuufzNxGt7vrtIM/a1xj7kjMB5zPFo4Ah/27LMPdALQgB0BRgDJ6Gfx4xWAi732tgpfwj7uTud52tTdi5H4vccOz/Vrnxd0AgAMAigAyegFINKFQHI4DvTY3aMY6a5xmbx94ta4z+G/sN5Td6dL9yysVKEVgJ0BCgApD3/Pf8EVOMbNzdJYdzOOx0ovXfXB+CwtrYj5yvaMADIkxKKRGvmAt2GwEee5b/sO/DvjHsV4NHvp6uNZ21q2byuxRtVBSgTAIiBJ41OeFtxsxOnuxnxMdpNxlpeKzDjpl4/FZbBA1ZoRACkHqfNUCmvFOW5Cfna7e3C5h2664pT8bC4RnQCwBpAhMaYAR2IXL/1c6m7P2fIrMMlDL+HtfbhQ1TolAmAK4GP4xjgL8Akvvdzict9HwLXh08p8GQCOCe7MoEwiAG4J5mP4RhcBSCM+6qGb1/FFC+vdbPxY3UkTDrGwvQC6CKCn9KMAkFL5qIejv1pxjvMzLVc+P/ewNjC0JEAnAMDOFIBkont+e+AsD338zj1lZb5bhx+pOwlNALSLp3eiAJCSkJ44Ut3JYnzb1IkblTvpAiNlsLIHv7yrbL8DBSArYoshjkYPdR8/dCssXXAbcL26kyMsPeiEVgC2pwBkRWyzAPrgdw6utXYCN6iXBB1s7cI2LFW2pwBkRmwRgP4EgJ878wlm9yYeUXYR1DyAW6FctZOYAkS+ny0pH9kbuyq7WIobrL0AAPxR2X6UaPbh888yVWtGAKQkTlD38CenX4jjg78rFwTV4QBrF7ZBVwWgAJCSOFbdw83WLrTj1qm3CwsqCaAAZENsGbwK6ap+6k13/7H2Ygv/VLYPSwB0y6o4DZgZMUnI/uopwJusXdgKrQB80NqBbVitas0IgJTAYcr2bfirtQvv4V5WbqXVT3a29mErVqlaN0oPCgAphjboneS0m1f5ZZKy/d7WDmyFTgCA7SkA2RBNCiAOhyq7eMjahw48q2wfkgDoUgAKQGbEsxJwGLSHY060dqEDWgEYZe3AVmgjgH4UgGyIJgJQP/+Xqwecb55X3uMhRQBaAWiiAJDCaKvek7Lf+7c83Frl0dp7SFdrH7agTQF6UQBIYbTPu9ASAECbBDRsPlo7ALTrK3tTAJKIJ4BXIk6d8T5q7UMCs5Tt32/twBa0Jx9RADIiFgnZDU2q9mvVgy0L3lC2H2rtwBa0AsAUgBRkH2X76aFVAAAAryvb+z4fuXIoACRTtALwgrUDibymbB+OAKxTtmcKQAqiLQEGKQBupfItunAEgDUAkinaEmCQAgBtDLCr1Fs7sAkKAMkO6YrdlF2EKgC6Y8kbPB2SpkebArAGQAqwG7qo2s93ui2rsmOxsr1WGH3BCCAT9JN4cUwDaue7tdNt2fG2sn0orwRr51gYAZACaAVAF2hniTYCiEUAGAGQAmgFIKx9ALZGGwEMtHZgE1oBaKQAZANTACDkCCAWAdAedNKtswDojhqIA/3wjWM/AK0AaM/iy45YUgCtAHTtLADaLmNAP3wjiACkXn0cSLgRgHZ2IpYIwFEASBo7o0HZQ7gRgG47bWCA1Cl78IP6TQseDUbS0Ia5a4JdBQDXgmZVBw3ob+0DgEwEgBFA0lXJvwd7tGGu9uzabNHGANqdEv2gHq0UgCQoAAAwSNk+2Oc/AA8bals7AABOXa2iACShH766JbRhoI0Alls7UBBtBBCEAOihACTBCADQ1wCWWztQEAoAAApAMvrhG8E0oDoCWGHtQEHUR2pYO+AHzgIkoQ/gY0gB4q4BaN+ji1YAGAGoI4BA5oi17KRsH3YEQAEAQAFIRjuAIxAAaUSjsovl1j4UhAIAgAKQDAUA6KfuQVtmyxYKAAAKQDLaARxDBWAHdQ8brF3I1DrdeQnB0OlWdxLJm2watAM4hghA/4QL+71S9WZa1g74IelWZQzAFMBHBBD2zhIUAADJtyonAikAPmoAYUcATAEAMAJIhjUAHxFA2AKgvcvrpYe1Cz6gACTBCCD+GoD+Lo8iCaAAJMEioI8UIOwagD7RjSIJoAAkwQgA6KvuIewIQD/XFW0EwCIgBQDope6BEUAVwAggCQqADwEIeyGQ/i7vae2CDygASXAWwMfzba21CwXRpwDdrV3wAQUgCRYBfUQA2pNrs0WfAlAAooUpgI8SV9gCoC9Rch1AtNS8AIhTvwwcugDoE5RoIwDOArAG0OhBxMKuAWjfBWAEEDE1HwF4qAD4GGJZwggAAAUgGe0TvPq3BNUnAOtd2PeRXgAYAUQLUwD90y3sCoCP+KSbtQs+oAAkwRRAf3OHLgCMAABQAJJhBKC/ucMuAfoQqHprF3zAWYAkGAHEHwHo7dMenh4EjACS4ErA+GsAjAAAUACSYQSgF4D4UwBGANFCAYg/BdALFAUgWlgEZApQnGhTAJ4LwAggegFwrerXgaKNAAiLgPqbO/QagF6ioo0ACCMAfRIT9psAgF6iGAFEi/b2r/4agN4DRgBVAQUgCe3tX/3PBv3NHb8AVP8rX6AAJKO9/av/2aCPAAIvAlaFhTlAAUiCAqD3IP4aQLQRAKcBKQCsAdQIjACS0A5gFgGrIQJgDQAUgGS0AsAiYOjnAgGMAABQAJJhBKD3IPyXyhkBgAKQDGsA+ps7/Agg7MNLc4ICkARTAH0hOHwBCN/CHKAAJMEIoBYEIPwkJQc4DZiENgOufgHQvxIe/vDSShRrANHCCKAWIoDwLcwBCkASFAC9AMQfAUQBBSAJCkAtRABaiWIKEC1cB8AaQHEoANHCCKAWIoDwLcwBCkASFAAKQI3AacAkKAC1IADhJyk5wAggCQpALcwCsAgICkAyFAB9ETD8CCB8C3OAApAEBaAWUoDwLcwBCkASFIBamAbk24CgACTDXYFrIQLQilz4ElcCFIAkGAHUggBoLQzfwxLgNGASFIBamAXQDuDwPSwBRgBJUAAYARSHAhAtfBdAXwQM/5B5rQCE72EJUACS4JZgtZAGap/g4cc4JUABSIIRgD68DX+dnNbHGFIAoQAkwQggiqdbEbQSFYMAtHAWIAkWATeoewg/AtASgwBsZASQhPYJzgigGh4jjAAoACk40T3Du1o7oEa/TJYRQDXQQgFIRvcMr/4IoBbWyTMCYASQCgVACyOAaoACkIIuiK/+FICzAMWhAEQMIwBSjBgEgNOAKeie4RSAakgBtBbGECUlRgCMCrQz+RSAWiCGCIACkEKt1wBqIQLQEoMAtFAAkmENIH5YBEyJAKr/VRY9uiFc/UuBa0EAtEQrAIwAVAIg9RFcQX2BK/wUgBEABSAVTRZf/QkAI4BSiEEAWANIQTOIKQBANUQAWmIQAEYAKWgGcfXPAdRGBMB1ABSAVJgCaIn/LopBAFopAMkwBdAS/kwIIwDWAFJhCqAlfAHQWhhDmsQUIIVajwD0T7f4BYARQMSwBqAl/KugXfAWgwCwBpBCracA+k1Bw19PqpWoGASAKUAKNZ4COFHHAOFfBaYATAFSqXEBgD4GYA2gGmjhy0DJaML4GFIACkBxYpgFYASQAiMACkAxYogAWANIgQIQvwBwFoARQCoUgPXK9uELACMATgOmwhqANsOlAFQDjABSYAQQfwpAAaAApEIB0ApA+FeBswAUgFQoAKwBFIMRQMTU+lJgpgDFoQBEDCMACkAxKAARoxnE4d/6pcAaQDEoABHDaUCtAHS3dqAofBswSQCEwx9gCqAXgG7WDmRuYQyzAAlLgSkAAAWgFgRAG6PEGQFQAABQAPQC0MPagaJoJSqGcwESBIAvAwOcBtQLQPhXQRsBxJACMAJIgRFA/EVApgAUgFRqfVPQWhAApgAUgFQYAbAIWAxGABFDAWAEUAxGABFDAdCWuBgBVAMUgBQ4C6AVgPgjAApAxPBdAApAMWJIAVopAMnwXYDIUwCpU35ObU6sffBAGwUgGdYAIhcAVgAAUABSoQDEngKwAgBQAFJhEZARQGFiqAAkvvxLAQAAJ5W/E8EIAGAEUB208WWgNCofxhQAIHwBYAQAMAUoQOWBPAUAABoUMVQesAgIMAUoACMALWHXQpgCAIwACsAIQEvYSQBTACBRAOJYx6an8usQ9pOvVPQCEPY8ACMAIFEA4nh+6WEKoCXuCCAOARBGAGlQALTEHQEwBYgc1gC0MAIIH6YAqVR+HeKQUO2GILELACOAyKlQAKQ+knmU2FMAbak2DgFgDSCVSiOAWCKo2FMA7bkFMWwKjqRZfwpAOxQALWFHACwCAoBjDSANCoCWsCMACgAA1DECSKPSHJECsJmwBYBFQCAxAqAAtFPpQI5jHSAFoBht1g74gSlAGkwBtIR9PKhWAGLYEZApQAFqXABcm/oWD7sIyAgAAGcB0qlxAYD+Fg87AtBaF0cEwBpAKpUO5LC3wSgHrQCEXQPQxidxCEAdawC+iWMdIKAXgLBTAG0EEEcKwAggFZdzu/CIOwJgDQDgQqACUAAoAIWIIwVgBJAKBYACUIhoIwAKQDuVDmTWADbDWYDwoQCkwghAu9g17giAAhA5FIC4ZwE4DQhwJWABKABaAQi7nKwVgDhqAPWcBUiDNQDtLR72a1Ha+zwOAWhgBJAGI4C4IwCtdXGkAPUUgDQqfZJTADYTcAQgdeol29FGAGHrdn4wAog5AtDbxgggcigAEUcAHgQg2giAAtAOi4CMAAoRRwRAAUglnid5pWgXAsUdAUQrACHrdp5UevRTHEdGAXFHAHpxiiMFYA0glfU5twsP1gAKEW0EQAFohwKgFYCQkyj9vk3RCkDIgVueUAC0AhDHEEmDKUDkVHo6rv5U3VDQ3uIhDxG9bSF7VzoUgFQYAcQcAehtC9m70mEKkAoFgAJQrd6VTkPn570uAugrcVwYSwH4UCTXMGQv9LZdKBdaO+GBrkwB0mAEoCXkLDlkccqT7kwB0qh0IMdTBNQS8iAL2bY86cEIII0KB7ITD8dqxkHIgyzk6CRPKACpVB7Kr7M2PRBCFkIKQDs9KQBprK24ZbO16YGw0tqAAqyyNiAQerAGkMbSilsuszY9EEIWgDXqdx3joDsjgGTWu8qf4xSAdgIWACdYbW1DELAGkELlz38KwGYCFoDgrcuLnkwBkqEA6Al7iK2wNiAIEiIA/YuSMaARgCXWxgdC2IW2sOUpL1gETGG+ou1b1sYHQthDLGzr8qKjAIhjBABAJwDzrI0PhLAjIU2MFw+dIgA+/9vRPMU14hETb1obUBDKNJAgAJwDaIcRgJ6whZCfEkABSOVVRdv5ilWEMTHH2oCChB2f5EUnAYhnU2sNLXi58sauFS9ZOxAAS9xiaxMKMsvagCBo7SgAa4N+hSMvXne6t/pnWDsQAC9aG1CE2VhjbUIArOggAE4w29qmANDevKHf/HnwgrUBhXFt/JQAvN55HcDz1jYFwJPK9k9YOxAAk60NKAo/JeD5zgIw0dqmAJikbP9UzYeXgsetTSjKJGsDAuCRTqe3SH/Mr/HVAMuxg1O+LCoP4FhrN0x51n3Q2oRiSBPeRndrK0xZjQGdIgC3GBOs7TJmgnb4A7jT2gljbrU2oDhuJe61tsGYW9yahPPbZF88E9Ep9+VztFOnQdIXC2v46dKCoa4KFtrIKbjL2gZD1mMPNydhoLvn8Edr2wyZ7SM3dMtrOgb4SzUMfwATanrFxk/dnJQTXKUXpmBva/uM+KS7yUc3Mhwv1ui6yg0Y5V6xNqI05Bz82doGIyZjrNuA5FDfrcbJeMfaQhOexy1+OnIv4w/Wzhjxg2oZ/gD+D/dbm2DCHJzmNgAFznCXAzEB/a3tzJlVONh5W8UnvfAvjLR2KXcexvGuihaUy0BMxWBrK3JmDk5wM9v/mVrsc//GATW2KGg9zvU3/AG3GqfU3OYgk3FKNQ1/wC3AWCy0tiJXHscBm4c/ClX73Zs4FD+tmWMuFuEo53kC1L2OD6lXFVYPgl9grKu6JVDuFeyHh6ytyIl1+AGOcVul9wWn+9wa93UMww3Ri8AyXI49XAZD1S3E4Ti3BmrNLbgd+7mvuqo8GdEtwrE4Fc9Y25ExK3ENhrvvbfsZuVJaSh+Mx1EYhd3QJ5pVgquxAYvwGmbhITzuMn4HUkbgeOyDD2BH9EGPSFYIrEUzluFNvIwpuN9FsBeyvB/jsR/2xEA0oo+1NZ5YhdV4Dc9jIh5wCftU/H8OpHQhUlDWEQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMy0wOVQwNTozOTo0OCswMDowML3MUMAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDMtMDlUMDU6Mzk6NDgrMDA6MDDMkeh8AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                  />
                </g>
              </svg>
            </a>
            <a href="https://www.facebook.com/BOIKyrgyzstan/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                viewBox="0 0 50 50"
              >
                <g
                  id="Group_102"
                  data-name="Group 102"
                  transform="translate(-892 -156)"
                >
                  <g
                    id="Component_1_21"
                    data-name="Component 1 – 21"
                    transform="translate(892 156)"
                  >
                    <circle
                      id="Ellipse_21"
                      data-name="Ellipse 21"
                      cx={25}
                      cy={25}
                      r={25}
                      fill="#2653ad"
                    />
                  </g>
                  <path
                    id="facebook"
                    d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z"
                    transform="translate(904.5 169.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </g>
              </svg>
            </a>
            <a href="https://twitter.com/BOIKyrgyzstan?s=09">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                viewBox="0 0 50 50"
              >
                <g
                  id="Group_103"
                  data-name="Group 103"
                  transform="translate(-958 -156)"
                >
                  <g
                    id="Component_1_22"
                    data-name="Component 1 – 22"
                    transform="translate(958 156)"
                  >
                    <circle
                      id="Ellipse_21"
                      data-name="Ellipse 21"
                      cx={25}
                      cy={25}
                      r={25}
                      fill="#2653ad"
                    />
                  </g>
                  <path
                    id="twitter"
                    d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z"
                    transform="translate(971.5 169.51)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </g>
              </svg>
            </a>
          </div>
          {/* <div className="footer-complaint">
            <a href="{% url 'complaint' %}">Подать жалобу</a>
          </div> */}
        </div>
      </div>

      <div className={classes.footer__section}>
        <div className={classes.footer__logos}>
          <p>
            {
              langState.lang === 'ru' ? 'Партнеры' :
              langState.lang === 'kg' ? 'Партнёрлор' : 
              'Partners'
            }
          </p> <br />
          <Grid container spacing={2} justify="space-around" className={classes.logos_grid}>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="aoc-logo" />
            <img src={logo6} alt="ubk-logo" />
            <img src={logo7} alt="min_economy-logo" />
            <img src={logo8} alt="amcham-logo" />
          </Grid>
          <Grid container spacing={2} className={classes.logos_grid}>
            
          </Grid>
        </div>

        <div className={classes.footer__logos_slider}>

          <div>
          <p>Наши партнеры</p>
          <Slider {...settings} className={{ cursor: "pointer" }}>
            <img className={styles.heroImg} src={logo1} alt="logo1" />
            <img className={styles.heroImg} src={logo2} alt="logo2" />
            <img className={styles.heroImg} src={logo3} alt="logo3" />
            <img className={styles.heroImg} src={logo4} alt="logo4" />
          </Slider>
          </div>


        </div>
      </div>
    </footer>
  );
}
