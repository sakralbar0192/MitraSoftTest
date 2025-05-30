import { FC, useEffect } from 'react'
import classes from './styles.module.scss'
import { useAppDispatch } from 'app/hooks'
import { setCodeExampleSourceLinkHref } from 'app/store/slices/mainSlice'

const AboutMe: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCodeExampleSourceLinkHref(''))
    }, [])

    return (
        <div className={ classes.aboutMeWrapper }>
            <h1>Привет!</h1>
            <div className={ classes.section }>
                <p>Я опытный frontend-разработчик с опытом работы более 4х лет. Специализируюсь на создании современных веб-приложений с использованием передовых технологий и методологий разработки.</p>
            </div>

            <div className={ classes.section }>
                <h2>Основные навыки</h2>

                <div className={ classes.section }>
                    <h3>Языки программирования</h3>
                    <ul>
                        <li><span className={ classes.highlight }>JavaScript</span> (ES6+)</li>
                        <li><span className={ classes.highlight }>TypeScript</span> (глубокое понимание типизации и ООП)</li>
                    </ul>
                </div>

                <div className={ classes.section }>
                    <h3>Инструменты сборки</h3>
                    <ul>
                        <li><span className={ classes.highlight }>Webpack</span> (оптимизация производительности, настройка конфигурации)</li>
                        <li><span className={ classes.highlight }>Vite</span> (быстрая разработка, современные подходы)</li>
                        <li><span className={ classes.highlight }>Gulp</span> (автоматизация задач)</li>
                    </ul>
                </div>

                <div className={ classes.section }>
                    <h3>Фреймворки и библиотеки</h3>
                    <ul>
                        <li><span className={ classes.highlight }>React</span> (Hooks, Context API, Redux/Redux-Saga)</li>
                        <li><span className={ classes.highlight }>Vue.js</span> (Vue 2/3, Vuex, Pinia, Composition API)</li>
                        <li><span className={ classes.highlight }>Lit</span> (Web Components)</li>
                    </ul>
                </div>

                <div className={ classes.section }>
                    <h3>Тестирование</h3>
                    <ul>
                        <li><span className={ classes.highlight }>Jest</span> (unit-тесты, тестирование компонентов)</li>
                        <li><span className={ classes.highlight }>Storybook</span> (документирование и демонстрация компонентов)</li>
                    </ul>
                </div>

                <div className={ classes.section }>
                    <h3>Дополнительные инструменты</h3>
                    <ul>
                        <li><span className={ classes.highlight }>React-Router</span> / <span className={ classes.highlight }>Vue-Router</span> (маршрутизация)</li>
                        <li><span className={ classes.highlight }>Vuetify</span> / <span className={ classes.highlight }>React-Bootstrap</span> (UI компоненты)</li>
                        <li><span className={ classes.highlight }>Redux</span> / <span className={ classes.highlight }>Redux-Saga</span> (управление состоянием)</li>
                        <li><span className={ classes.highlight }>ESLint</span> / <span className={ classes.highlight }>StyleLint</span> (стандартизация кода)</li>
                    </ul>
                </div>
            </div>

            <div className={ classes.section }>
                <h2>Профессиональные компетенции</h2>
                <ul>
                    <li>Разработка модульных и переиспользуемых компонентов</li>
                    <li>Оптимизация производительности приложений</li>
                    <li>Создание документации и демо-примеров</li>
                    <li>Написание валидного, читаемого и поддерживаемого кода</li>
                    <li>Опыт работы с CI/CD процессами</li>
                </ul>
            </div>

            <div className={ classes.section }>
                <h2>Soft skills</h2>
                <ul>
                    <li>Быстрая обучаемость новым технологиям</li>
                    <li>Умение работать в команде</li>
                    <li>Конфликтоустойчивость и стрессоустойчивость</li>
                    <li>Способность к самоорганизации</li>
                </ul>
            </div>

            <div className={ classes.section }>
                <p>Английский язык: Upper-Intermediate (чтение технической документации).</p>
            </div>

            <div className={ classes.section }>
                <p>Готов к решению сложных технических задач и развитию профессиональных навыков в вашей команде.</p>
            </div>
        </div>
    )
}

export default AboutMe
