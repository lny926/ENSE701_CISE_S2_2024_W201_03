import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import SortableTable from "../../components/table/SortableTable";
import data from "../../utils/dummydata";

interface ArticlesInterface {
    id: string;
    title: string;
    authors: string;
    source: string;
    pubyear: string;
    doi: string;
    claim: string;
    evidence: string;
}

type ArticlesProps = {
    articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
    const headers: { key: keyof ArticlesInterface; label: string }[] = [
        { key: "title", label: "Title" },
        { key: "authors", label: "Authors" },
        { key: "source", label: "Source" },
        { key: "pubyear", label: "Publication Year" },
        { key: "doi", label: "DOI" },
        { key: "claim", label: "Claim" },
        { key: "evidence", label: "Evidence" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [searchField, setSearchField] = useState<"title" | "authors">("title");

    const filteredArticles = articles.filter((article) => {
        const valueToSearch = article[searchField].toLowerCase();
        return valueToSearch.includes(searchTerm.toLowerCase());
    }).sort((a, b) => a.title.localeCompare(b.title)); 

    return (
        <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h1>Articles Index Page</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <select
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value as "title" | "authors")}
                        style={{ marginRight: "10px", padding: "8px", fontSize: "1em" }}
                    >
                        <option value="title">Title</option>
                        <option value="authors">Authors</option>
                    </select>
                    <input
                        type="text"
                        placeholder={`Search by ${searchField}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: "8px", fontSize: "1em" }}
                    />
                </div>
            </div>

            <p>Page containing a table of articles:</p>

            <SortableTable headers={headers} data={filteredArticles} />
        </div>
    );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
    // Map the data to ensure all articles have consistent property names
    const articles = data.map((article) => ({
        id: article.id ?? article._id,
        title: article.title,
        authors: article.authors,
        source: article.source,
        pubyear: article.pubyear,
        doi: article.doi,
        claim: article.claim,
        evidence: article.evidence,
    }));

    return {
        props: {
            articles,
        },
    };
};

export default Articles;
