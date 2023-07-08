export function TwitterFollowCard ({ children,formatUserName,  userName ,isFollowing}) {
    const text = isFollowing ?'Siguiendo': 'Seguir'
    const buttonClassName =isFollowing ?  'tw-followCard-button is-following': 'tw-followCard-button'
    return(
        <article className = 'tw-followCard'>
        <header className = 'tw-followCard-header'>
          <img 
          className = 'tw-followCard-avatar'
          alt= "El avatar de MiduDev" 
          src= {`https://unavatar.io/${userName}`} />
          <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName}>
            {text}
          </button>
        </aside>
      </article> 
    )
}

//Esto seria un componente reutilizable donde le pasamos parametros para que se puedan modificar de manera dinamica
//Lo de la url se podria hacer tambien con una constante fuera 