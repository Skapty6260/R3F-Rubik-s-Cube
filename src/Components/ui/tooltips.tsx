import React from 'react'
import styles from './tooltips.module.css'

import { GiStripedSun } from 'react-icons/gi'
import { GrTooltip } from 'react-icons/gr'
import { PiShuffleDuotone } from 'react-icons/pi'

const TooltipsUI = () => {
	return (
		<nav className={`${styles.container}`}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<GiStripedSun size={30} />
					<p>Sky</p>
				</li>
				<li className={styles.li}>
					<GrTooltip size={30} />
					<p>Binds</p>
				</li>
				<li className={styles.li}>
					<PiShuffleDuotone size={30} />
					<p>Shuffle</p>
				</li>
			</ul>
		</nav>
	)
}

export default TooltipsUI
