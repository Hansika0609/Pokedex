import React, { createContext, useState } from "react";

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (pokemon) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, pokemon]);
  };

  const removeBookmark = (pokemon) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((item) => item.id !== pokemon.id)
    );
  };

  const isBookmarked = (pokemon) => {
    return bookmarks.some((item) => item.id === pokemon.id);
  };

  const bookmarksData = {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };

  return (
    <BookmarksContext.Provider value={bookmarksData}>
      {children}
    </BookmarksContext.Provider>
  );
};
