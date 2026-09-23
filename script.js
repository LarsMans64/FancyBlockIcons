const galleryData = {
  Axialeaa: {
    path: "assets/icons/axialeaa",
    galleries: {
      Isometric: [
        "chiseled_bookshelf.png",
        "crafter.png",
        "deepslate_diamond_ore.png",
        "flowering_azalea_leaves.png",
        "gilded_blackstone.png",
        "reinforced_deepslate.png",
        "sculk_catalyst.png",
      ],
    },
  },

  Axl0: {
    path: "assets/icons/Axl0",
    galleries: {
      Dimetric: [
        "bookshelf_di.png",
        "bricks_di.png",
        "coal_block_di.png",
        "lego_block_di.png",
        "the_crew_di.png",
        "trailer_dirt_di.png",
        "trailer_grass_di.png",
      ],
      Patchwork: [
        "bookshelf_patchwork.png",
        "bricks_patchwork.png",
        "coal_block_patchwork.png",
        "lego_block_patchwork.png",
        "the_crew_patchwork.png",
        "trailer_dirt_patchwork.png",
        "trailer_grass_patchwork.png",
      ],
      Isometric: [
        "bookshelf_iso.png",
        "bricks_iso.png",
        "coal_block_iso.png",
        "lego_block_iso.png",
        "the_crew_iso.png",
        "trailer_dirt_iso.png",
        "trailer_grass_iso.png",
      ],
    },
  },

  Cubeoidal: {
    path: "assets/icons/Cubeoidal",
    galleries: {
      Isometric: [
        "barrel.png",
        "chest.png",
        "crimson_nylium.png",
        "deepslate_bricks.png",
        "deepslate_tiles.png",
        "dripstone.png",
        "ender_chest.png",
        "melon.png",
        "netherrack.png",
        "slime_block.png",
        "warped_nylium.png",
      ],
    },
  },
  IcyCrystal: {
    path: "assets/icons/IcyCrystal",
    galleries: {
      Isometric: [
        "AetherIcon.png",
        "AtmosphericIcon.png",
        "BiomesOPlentyIcon.png",
        "BTAIcon.png",
        "BuzzierBeesIcon.png",
        "CavernChasmIcon.png",
        "ClayworksIcon.png",
        "EndergeticIcon.png",
        "FarmersDelightIcon.png",
        "GoldenHeightsIcon.png",
        "MCDivergeIcon.png",
        "MidnightIcon.png",
        "MiningMasterIcon.png",
        "MyceliumIcon.png",
        "NeapolitanIcon.png",
        "NightstoneBrickIcon.png",
        "NightstoneIcon.png",
        "OreganizedIcon.png",
        "RouxeIcon.png",
        "saguaro_stem.png",
        "SavageRavageIcon.png",
        "SmithingTableIcon.png",
        "stripped_saguaro_stem.png",
        "TransitionalIcon.png",
        "UpgradeAquaticIcon.png",
      ],
    },
  },
  ImXR24: {
    path: "assets/icons/ImXR24",
    galleries: {
      Isometric: [
        "tiny_amethyst.png",
        "tiny_cherry_leaves.png",
        "tiny_cherry_log.png",
        "tiny_cobblestone.png",
        "tiny_compact_chorus.png",
        "tiny_diamond_ore.png",
        "tiny_flaming_soulslite_bricks.png",
        "tiny_oak_planks.png",
      ],
    },
  },
  LarsMans: {
    path: "assets/icons/LarsMans",
    galleries: {
      Dimetric: [
        "bedrock.png",
        "crafting_table.png",
        "deepslate_diamond_ore.png",
        "dirt.png",
        "enchanting_table.png",
        "furnace.png",
        "grass.png",
        "hay_bale.png",
        "iron_block.png",
        "sculk_catalyst.png",
        "tnt4.png",
      ],
      Isometric: [
        "amethyst_iso.png",
        "bedrock_iso.png",
        "chromatic_iron_block_iso.png",
        "crafting_table_iso.png",
        "deepslate_diamond_ore_iso.png",
        "enchanting_table_iso3.png",
        "end_portal_frame_iso_eye.png",
        "end_portal_frame_iso.png",
        "furnace_iso.png",
        "hay_bale_iso.png",
        "iron_block_iso.png",
        "safety_button.png",
        "scaffolding_centered.png",
        "scaffolding2.png",
        "sculk_catalyst_iso.png",
        "separated_leaves_log.png",
        "sniffer_egg_iso.png",
        "tnt_iso.png",
      ],
    },
  },
  MiffenKop: {
    path: "assets/icons/MiffenKop",
    galleries: {
      Isometric: [
        "Cake Icon.png",
        "CarvedPumpkin Icon.png",
        "Decorated Pot.png",
        "Faithful Grass Block Icon.png",
        "Faithful Grass Block Icon 2.png",
        "Greatwood Icon.png",
        "Greatwood Icon 2.png",
        "Mogswomp Icon.png",
        "Nuclear Bomb Icon.png",
        "Nuclear Bomb Icon 2.png",
        "Pale Oak Log Icon.png",
        "Pale Oak Log Resin Icon.png",
        "PortalHelper Icon.png",
        "PortalHelper Icon 2.png",
        "Pumpkin Icon.png",
        "Sponge Icon.png",
      ],
    },
  },
  Mojang: {
    path: "assets/icons/Mojang",
    galleries: {
      Isometric: [
        "Bookshelf alt.png",
        "Bookshelf.png",
        "dirt_iso.png",
        "grass_iso.png",
      ],
    },
  },
  ommer15: { path: "assets/icons/ommer15", galleries: {Isometric: ["noteblock.png"]} },
};

const categoryPaths = {
  Dimetric: "dimetric",
  Patchwork: "patchwork",
  Isometric: "isometric",
};

const main = document.querySelector("main");
const navTabs = document.querySelector(".nav-tabs");

const createImage = (src, author, category) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = `${category} icon by ${author}`;
  image.loading = "lazy";
  return image;
};

const getImageUrl = (author, category, fileName) => {
  const basePath = galleryData[author].path;
  if (author === "axialeaa") return `${basePath}/${fileName}`;
  return `${basePath}/${categoryPaths[category]}/${fileName}`;
};

const createGallery = (author, category, imageFiles) => {
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  imageFiles.forEach((fileName) => {
    const image = createImage(
      getImageUrl(author, category, fileName),
      author,
      category,
    );
    gallery.appendChild(image);
  });

  return gallery;
};

const createAuthorSection = (author, { galleries }) => {
  const section = document.createElement("section");
  section.className = "gallery-section";
  section.id = `by_${author}`;

  const heading = document.createElement("h2");
  heading.textContent = `By ${author}`;
  section.appendChild(heading);

  Object.entries(galleries).forEach(([category, imageFiles]) => {
    const categoryHeading = document.createElement("h3");
    categoryHeading.textContent = category;
    section.append(
      categoryHeading,
      createGallery(author, category, imageFiles),
    );
  });

  return section;
};

const createNavTabs = () => {
  if (!navTabs) return;

  Object.keys(galleryData).forEach((author, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `nav-tab${index === 0 ? " active" : ""}`;
    button.textContent = author;
    button.addEventListener("click", () => {
      document
        .querySelector(`#by_${author}`)
        ?.scrollIntoView({ behavior: "smooth" });
      document.querySelectorAll(".nav-tab").forEach((tab) => {
        tab.classList.toggle("active", tab === button);
      });
    });

    navTabs.appendChild(button);
  });
};

if (main) {
  Object.entries(galleryData).forEach(([author, authorData]) => {
    if (Object.keys(authorData.galleries).length > 0) {
      main.appendChild(createAuthorSection(author, authorData));
    }
  });
}

createNavTabs();
