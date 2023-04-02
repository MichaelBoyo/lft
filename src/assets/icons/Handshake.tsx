import React, { FC } from 'react';

interface IHandshake {
  className: string;
}
const Handshake: FC<IHandshake> = (props) => (
  <svg
    {...props}
    width="19"
    height="16"
    viewBox="0 0 19 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4137 3.79703L14.0006 2.3839C13.6879 2.07391 13.2653 1.89999 12.825 1.89999H6.09187C5.6525 1.89999 5.22797 2.07515 4.91625 2.3839L3.50312 3.79703H0V11.3881H1.9C2.4225 11.3881 2.84406 10.9666 2.84703 10.447H3.11719L5.62875 12.7151C6.54609 13.4603 7.81969 13.4781 8.76375 12.828C9.13484 13.1486 9.53562 13.3 9.98391 13.3C10.5242 13.3 11.0319 13.0803 11.4327 12.5875C12.0887 12.8458 12.8636 12.6647 13.3327 12.0887L14.1105 11.1298C14.2767 10.925 14.3806 10.6905 14.4341 10.447H16.153C16.1559 10.9666 16.5805 11.3881 17.1 11.3881H19V3.79703H15.4137ZM1.425 10.4381C1.16375 10.4381 0.95 10.2244 0.95 9.96312C0.95 9.70187 1.16375 9.48812 1.425 9.48812C1.68625 9.48812 1.9 9.70187 1.9 9.96312C1.9 10.2273 1.68625 10.4381 1.425 10.4381ZM13.0031 10.2333L12.2283 11.1892C12.1452 11.2902 11.9967 11.308 11.8928 11.2248L11.1833 10.6489L10.2927 11.7325C10.1145 11.9492 9.84734 11.875 9.75828 11.8037L8.66578 10.8686L8.20266 11.4386C7.79 11.9462 7.03891 12.0234 6.56094 11.6345L3.67234 9.02203H2.85V5.21906H4.09391L5.92563 3.39031C5.985 3.36656 6.03547 3.34578 6.09484 3.32203H7.77812L6.62922 4.37593C5.75641 5.17453 5.70594 6.52234 6.49859 7.38328C6.93797 7.86421 8.31547 8.6064 9.51188 7.5139L9.75531 7.29124L12.9675 9.89781C13.0684 9.98093 13.0833 10.1323 13.0031 10.2333ZM16.15 9.02203H14.0956C14.0273 8.9389 13.9502 8.86171 13.867 8.79343L10.8181 6.31749L11.1892 5.97906C11.3822 5.80093 11.397 5.50109 11.2189 5.30812L10.8953 4.96078C10.7172 4.76781 10.4173 4.75593 10.2244 4.93109L8.58563 6.43328C8.30359 6.69156 7.82266 6.71234 7.55844 6.43328C7.28234 6.13937 7.30609 5.68812 7.59406 5.42687L9.54156 3.64265C9.76125 3.44078 10.0462 3.33093 10.3431 3.33093L12.828 3.32499C12.8903 3.32499 12.9497 3.34874 12.9913 3.39328L14.823 5.22203H16.15V9.02203ZM17.575 10.4381C17.3137 10.4381 17.1 10.2244 17.1 9.96312C17.1 9.70187 17.3137 9.48812 17.575 9.48812C17.8363 9.48812 18.05 9.70187 18.05 9.96312C18.05 10.2273 17.8363 10.4381 17.575 10.4381Z"
      fill="#213F7D"
    />
  </svg>
);

export default Handshake;
