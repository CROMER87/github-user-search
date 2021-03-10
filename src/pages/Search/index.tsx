import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoader';
import dayjs from 'dayjs'
import { Result } from '../../core/types/Result';
import Button from '../../core/components/Button';
import './styles.scss';
import UserSummary from './components/userSummary';
import UserInfo from './components/userInfo';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<Result>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        fetch(`https://api.github.com/users/${search}`)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response.json()
            })

            .then(userResponse => setUserData(userResponse))

            .catch(() => {

                toast.error('Usuário inexistente!')


            })

            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const createdAt = dayjs(userData?.created_at).format("DD/MM/YYYY");

    return (
        <div className="container-page">
            <div className="container-search">
                <h2 className="text-search">Encontre um perfil Github</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-position">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control search-input"
                                required
                                value={search}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <span className="button-search">
                        <Button text="Encontrar" />
                    </span>
                </form>
            </div>

            {userData && (
                <div className="container-result">

                    {isLoading ?

                        <div>
                            <span className="imageloader-position">
                                <ImageLoader />
                            </span>
                            <span className="infoloader-position">
                                <InfoLoader />
                            </span>
                        </div> : (

                            <div>
                                <div>
                                    <img
                                        src={userData.avatar_url}
                                        className="responsive rouded-circle image-position"
                                        alt=""
                                        height="284px"
                                        width="284px"
                                    />
                                </div>

                                <div>
                                    <a href={userData.html_url} className="button-position" target="_new">
                                        <Button text="Ver Perfil" />
                                    </a>
                                </div>

                                <div className="position-summary1">
                                    <UserSummary
                                        text="Repositórios públicos: "
                                        content={userData.public_repos}
                                    />
                                </div>

                                <div className="position-summary2">
                                    <UserSummary text="Seguidores: " content={userData.followers}
                                    />
                                </div>

                                <div className="position-summary3">
                                    <UserSummary
                                        text="Seguindo: "
                                        content={userData.following}
                                    />
                                </div>

                                <div className="container-info">
                                    <h5 className="text-box-info">Informações</h5>

                                    <div className="position-info1">
                                        <UserInfo
                                            text="Empresa:"
                                            content={userData.company}
                                        />
                                    </div>

                                    <div className="position-info2">
                                        <UserInfo
                                            text="Website/Blog:"
                                            content={userData.blog}
                                        />
                                    </div>

                                    <div className="position-info3">
                                        <UserInfo
                                            text="Localidade:"
                                            content={userData.location}
                                        />
                                    </div>

                                    <div className="position-info4">
                                        <UserInfo
                                            text="Membro desde:"
                                            content={createdAt}
                                        />
                                    </div>

                                </div>

                            </div>
                        )}
                </div>

            )}

        </div>

    );
}

export default Search;