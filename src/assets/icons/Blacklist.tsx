import React, { FC } from 'react';

interface IBlacklist {
  className: string;
}
const Blacklist: FC<IBlacklist> = (props) => (
  <svg
    {...props}
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.08321 5.78713L5.08358 5.7875H5.125C5.84771 5.7875 6.54087 5.50023 7.05183 4.9893L6.98112 4.91859L7.05183 4.9893C7.56276 4.47837 7.85003 3.78519 7.85003 3.06247C7.85003 2.33974 7.56276 1.64659 7.05183 1.13564L6.98516 1.20231L7.05183 1.13564C6.5409 0.624706 5.84772 0.337439 5.125 0.337439C4.40227 0.337439 3.70913 0.624707 3.19817 1.13563L3.19817 1.13564C2.68724 1.64657 2.39997 2.33974 2.39997 3.06247V3.06255C2.40054 3.78527 2.68838 4.47782 3.19867 4.9887L3.19875 4.98878C3.69979 5.48925 4.37558 5.77575 5.08321 5.78713ZM3.47503 3.06258C3.47606 2.15406 4.20966 1.41783 5.11717 1.41249H5.125C5.79221 1.41249 6.39395 1.81469 6.64919 2.43084L6.64921 2.43087C6.90495 3.04756 6.76367 3.7576 6.29189 4.22935L6.3626 4.30007L6.29189 4.22936C5.8201 4.70114 5.11009 4.84242 4.49341 4.58668L4.49337 4.58666C3.87725 4.33145 3.47507 3.72976 3.47503 3.06258ZM0.36976 13.5052C0.470651 13.6061 0.607691 13.6625 0.749994 13.6625H9.49999C9.6423 13.6625 9.77935 13.6061 9.88023 13.5052C9.98112 13.4043 10.0375 13.2673 10.0375 13.125L10.0375 11.375L10.0375 11.3749C10.0358 10.0725 9.51779 8.82375 8.5973 7.90272L8.59726 7.90268C7.67619 6.98218 6.4274 6.46421 5.12512 6.4625L5.12504 6.52398L5.125 6.46249H5.12499L5.12495 6.52296L5.12487 6.4625C3.82254 6.46417 2.57375 6.98219 1.65273 7.90268L1.65269 7.90273C0.732181 8.82379 0.214215 10.0726 0.2125 11.3749V11.375V13.125C0.2125 13.2673 0.268865 13.4043 0.36976 13.5052ZM8.96249 12.5875H1.2875V11.375C1.2875 10.0041 2.01876 8.73726 3.20617 8.0519L3.2062 8.05189C4.39368 7.36594 5.85619 7.36594 7.04366 8.05189L7.04369 8.0519C8.23117 8.73731 8.96236 10.0043 8.96236 11.375L8.96249 12.5875ZM11.2446 6.23463L10.6974 5.68751L11.2452 5.1397L11.2452 5.13971L11.2464 5.13854C11.4507 4.92746 11.4472 4.59222 11.2404 4.3848L11.2402 4.38457C11.0328 4.1778 10.6975 4.17427 10.4865 4.37863L10.4853 4.37976L9.93749 4.92757L9.38969 4.37976L9.3897 4.37975L9.38853 4.37863C9.17744 4.17426 8.84221 4.17782 8.63479 4.38457L8.63456 4.3848C8.42779 4.59222 8.42426 4.92746 8.62861 5.13854L8.6286 5.13855L8.62975 5.1397L9.17756 5.68751L8.62975 6.23532L8.62974 6.23531L8.62862 6.23647C8.42425 6.44756 8.4278 6.78279 8.63456 6.99022L8.63478 6.99044C8.84221 7.19721 9.17745 7.20074 9.38853 6.99639L9.38854 6.9964L9.38969 6.99525L9.93749 6.44744L10.4847 6.99461C10.5848 7.09837 10.7223 7.15718 10.8663 7.15852C11.0101 7.15986 11.1491 7.10283 11.2507 7.00076C11.3528 6.8992 11.4099 6.76017 11.4085 6.61626C11.4072 6.47227 11.3484 6.33478 11.2446 6.23463Z"
      fill="#545F7D"
      stroke="#545F7D"
      strokeWidth="0.2"
    />
  </svg>
);

export default Blacklist;
