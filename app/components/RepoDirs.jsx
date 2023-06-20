import Link from 'next/link';

async function fetchContent(name){
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/raqibnur/${name}/contents`)

    const content = await response.json();
    return content
}

const RepoDirs = async ({name}) => {
    const content = await fetchContent(name);   
    const dir = content.filter((content) => content.type === 'dir');

  return (
    <>
     <h3>Directories</h3>
     <ul>
        {dir.map((dir)=>(
            <Link key={dir.path} href={`/code/repos/${name}/${dir.path}`}>
                <li>{dir.path}</li>
            </Link>
        ))}
     </ul>
    </>
  )
}

export default RepoDirs