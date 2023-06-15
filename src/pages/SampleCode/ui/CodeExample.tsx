import { type FC, useState, useEffect } from 'react'
import classes from './styles.module.scss'
import { useParams } from 'react-router'
import { ECodeExamples } from 'app/codeExamples'

const CodeExample: FC = () => {
    const { choosenExample } = useParams() as {choosenExample: ECodeExamples}
    const [iframe, setIframe] = useState<string>('')

    useEffect(() => {
        switch (choosenExample) {
            case ECodeExamples.SMART_DEVICE:
                setIframe(
                    '<iframe className={ classes.iframe } src="/MitraSoftTest/smartDevice/index.html"></iframe>'
                )
        }
    }, [choosenExample])

    return (
        <div
            dangerouslySetInnerHTML={ { __html: iframe } }
            className={ classes.iframeWrapper }
        />
    )
}

export default CodeExample
