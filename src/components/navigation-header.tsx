// // Header.js

// import { useRouter } from 'next/navigation';

// const HeaderNavigator = () => {
//   const router = useRouter();
// //   const { path } = router;

//   // Function to convert path to a readable format
//   const formatPath = (path: string) => {
//     return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
//   };

//   // Split the pathname and format each part
//   const pathParts = router.split('/').filter(Boolean);
//   const formattedPath = pathParts.map(formatPath);

//   return (
//     <header>
//       {formattedPath.length > 0 && (
//         <div>
//           <span>{formattedPath.join(' > ')}</span>
//         </div>
//       )}
//     </header>
//   );
// };

// export default HeaderNavigator;
