using namespace System.Net

# Input bindings are passed in via param block.
param($Request, $DatabaseIn, $TriggerMetadata)

# Write to the Azure Functions log stream.
Write-Host 'PowerShell HTTP trigger function processed a request'

# Interact with query parameters or the body of the request.
if (-not $DatabaseIn) { 
    $body = 'VisitorCounter not found.'
    Write-Host $body

    # Associate values to output bindings by calling 'Push-OutputBinding'.
    Push-OutputBinding -Name Response -Value ([HttpResponseContext]@{ 
        StatusCode = [HttpStatusCode]::NotFound 
        Body = $body
    })

}

else {

    # Get "visitorCount" property from database with input binding ($DatabaseIn), add 1 to it, then display new VisitorCounter.
    $visitorCount = $DatabaseIn.visitorCount + 1
    $body = "VisitorCounter found, added 1.  New VisitorCounter, $visitorCount."
    Write-Host $body

    # Using a hash table to store the "visitorCount" and "id" values from the database to the "Value" object.
    Push-OutputBinding -Name DatabaseOut -Value @{
        visitorCount = $visitorCount
        id = $DatabaseIn.id
    }
    
    # Associate values to output bindings by calling 'Push-OutputBinding'.
    Push-OutputBinding -Name Response -Value ([HttpResponseContext]@{ 
        StatusCode = [HttpStatusCode]::OK
        Body = $visitorCount
    }) 
}