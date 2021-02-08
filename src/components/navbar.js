import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { useStaticQuery, graphql } from 'gatsby';

const PAGES_MENU_ITEMS = [{
        slug: '',
        name: 'Home',
    },{
        slug: 'narqe',
        name: 'Quien Soy',
    },{
        slug: 'musica',
        name: 'Música',
    },{
        slug: 'series-peliculas',
        name: 'Series/Cine',
    },{
        slug: 'libros',
        name: 'Libros',
    },{
        slug: 'fotografia',
        name: 'Fotografía',
    },{
        slug: 'playlists',
        name: 'Playlists',
    },{
        slug: 'contacto',
        name: 'Contacto',
    }
];

const MenuList = ({ items = [] }) => (
  <ul className="Navbar__Menu__List">
    {items.map(({ slug, name }, i) => (
      <li key={i} className="Navbar__Menu__List__Item">
        <a 
        href={slug.startsWith('/') ? slug : `/${slug}`} 
        rel="noreferrer"
        target={slug !== 'narqe' ? '_self' : '_blank'}>
            {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {
            order: [ASC, DESC]
          }
          limit: 1000
          filter: {
            frontmatter: {
              contentType: { eq: "page" }
              enabled: { eq: true }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  );

  const menuItems = allMarkdownRemark.edges
    .map(({ node }) => ({
      slug: (node.frontmatter.path || node.fields.slug).toLowerCase(),
      name: node.frontmatter.menuTitle || node.frontmatter.title,
    }))
    .concat(PAGES_MENU_ITEMS);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar
      position="sticky"
      className={`Navbar ${isMenuOpen ? 'Navbar--opened' : 'Navbar--closed'}`}
    >
      <Toolbar className="Navbar__Toolbar">
        <div className="Navbar__Col">
          <div className="Navbar__Logo">
          </div>
        </div>
        <div className="Navbar__Col"></div>
        <div className="Navbar__Col">
          <div className="Navbar__Menu">
            <div className="Navbar__Menu__Icon">
              <i>
                {isMenuOpen}
              </i>
            </div>
            <MenuList items={menuItems} />
          </div>
        </div>
      </Toolbar>
      <div className="Navbar__Fade" />
    </AppBar>
  );
};

export default Navbar;