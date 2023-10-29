export default function boardBuilder (title, ...notes) {
    const projectBoard = [...notes];
    return {title, projectBoard};
};