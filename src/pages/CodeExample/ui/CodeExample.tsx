import { type FC, useState, useEffect } from 'react'
import classes from './styles.module.scss'
import { useParams } from 'react-router'
import { ECodeExamples } from 'app/codeExamples'

const CodeExample: FC = () => {
    const { choosenExample } = useParams() as {choosenExample: ECodeExamples}
    const [projectFolder, setprojectFolder] = useState<ECodeExamples | ''>('')

    useEffect(() => {
        setprojectFolder(choosenExample)
    }, [choosenExample])

    return (
        <div
            dangerouslySetInnerHTML={ { __html: `<iframe className={ classes.iframe } src="/MitraSoftTest/${projectFolder}/index.html"></iframe>` } }
            className={ classes.iframeWrapper }
        />
    )
}

export default CodeExample
