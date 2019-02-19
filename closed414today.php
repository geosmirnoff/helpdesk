<?php
/* ЗАКРЫТЫЕ 414 СЕГОДНЯ */
	require('connect.php');
	$query = "SELECT COUNT(id) AS closed414today 
				FROM dbo.issues 
					WHERE project_id=1 
						AND closed_on > CONVERT(DATETIME, CONVERT(VARCHAR(15), GETDATE(), 101)) 
						AND assigned_to_id IN 
							(SELECT user_id
								FROM dbo.groups_users
									WHERE group_id=171)";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['closed414today'];
	}