import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BookListing } from "../../pages/book-listing/BookListing";
import { Register } from "../../pages/register/register";
import { Login } from "../../pages/login/login";
import { RoutePaths } from "../../utils/enum";
import { useAuthContext } from "../../context/auth";
import Book from "../../pages/book/Book";
import EditBook from "../../pages/book/editBook/EditBook";
import { User } from "../../pages/user/User"
import EditUser from "../../pages/user/editUser/EditUser";
import Categories from "../../pages/categories/Categories";
import EditCategory from "../../pages/categories/editCategory/EditCategory";
import UpdateProfile from "../../pages/update-profile/updateProfile";
import Cart from "../../pages/cart/Cart"

export const MainNavigation = () => {
  const authContext = useAuthContext();
  const Redirect = <Navigate to={RoutePaths.Login}/>

  return (
    <Routes>
      <Route path={RoutePaths.Login} element={<Login />} />
      <Route path={RoutePaths.Register} element={<Register />} />
      <Route path={RoutePaths.BookListing} element={authContext.user.id ? <BookListing /> : Redirect} />
      <Route path={RoutePaths.Book} element={authContext.user.id ? <Book /> : Redirect} />
      <Route path={RoutePaths.EditBook} element={authContext.user.id ? <EditBook /> : Redirect} />
      <Route path={RoutePaths.AddBook} element={authContext.user.id ? <EditBook /> : Redirect} />
      <Route path={RoutePaths.User} element={authContext.user.id ? <User /> : Redirect} />
      <Route path={RoutePaths.EditUser} element={authContext.user.id ? <EditUser /> : Redirect} />
      <Route path={RoutePaths.Category} element={authContext.user.id ? <Categories /> : Redirect} />
      <Route path={RoutePaths.AddCategory} element={authContext.user.id ? <EditCategory /> : Redirect} />
      <Route path={RoutePaths.EditCategory} element={authContext.user.id ? <EditCategory /> : Redirect} />
      <Route path={RoutePaths.UpdateProfile} element={authContext.user.id ? <UpdateProfile /> : Redirect} />
      <Route path={RoutePaths.Cart} element={authContext.user.id ? <Cart /> : Redirect} />
    </Routes>
  );
};
