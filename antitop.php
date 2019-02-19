<?php
/* АНТИТОП */
	require('connect.php');
	$query = "SELECT TOP 5 u.lastname, u.firstname, count(i.id) AS antitop
				FROM dbo.issues i
					INNER JOIN dbo.users u
					ON i.assigned_to_id = u.id
						WHERE project_id = 1 AND closed_on IS NULL
							GROUP BY u.lastname, u.firstname
							ORDER BY antitop DESC";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo '
		<li class="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">'.$row['lastname'].' '.$row['firstname'].'
			<span class="badge badge-danger">'.$row['antitop'].'</span>
		</li>';
	}