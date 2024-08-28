interface Image {
    path: string;
    alt: string;
}

interface SubLink {
    id: string;
    text: string;
}

export interface BlogTableContentLink {
    id: string;
    text: string;
    subLinks: SubLink[];
}

export interface Blog {
    title: string;
    path: string;
    subTitle: string;
    image: Image;
    tags: string[];
    tableContentLinks: BlogTableContentLink[];
}

interface HeaderContent {
    heading: string;
    text: string;
    image: Image;
}

export interface BlogsJSONData {
    headerContent: HeaderContent;
    blogs: Blog[];
}
